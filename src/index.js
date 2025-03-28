const p = require('node:process');
const log = require('./helpers/ca_log');
const g = require('./global');
const mqtt = require('mqtt');
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const addUpdateView = require('./addUpdate')
const consumeView = require('./consume')
const shoppingListView = require('./shoppingList')
const rateLimitMiddleware = require('./rateLimiter')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(helmet());

// Begin reading from stdin so the process does not exit
p.stdin.resume();

// Read environment variables
g.Globals.logTopic = process.env.LOGTOPIC || 'logs';
const topicFolder = process.env.TOPICFOLDER || 'inventory_ca';
g.Globals.invConsumeTopic = process.env.INVENTORYCONSUMETOPIC || `${topicFolder}/consume`;
g.Globals.addUpdateItemTopic = process.env.INVENTORYADDUPDATETOPIC || `${topicFolder}/addupdate`;
g.Globals.invUpdatedTopic = process.env.INVENTORYUPDATEDTOPIC || `${topicFolder}/updated`;
g.Globals.actionResponseTopic = process.env.ACTIONRESPONSETOPIC || `${topicFolder}/actionresponse`;
g.Globals.shoppingListTopic = process.env.SHOPPINGLISTTOPIC || `${topicFolder}/shoppinglist`;
g.Globals.mqttServerAddress = process.env.MQTTSERVERADDRESS;
g.validateConfig();
const port = process.env.PORT || 3000;

app.use(rateLimitMiddleware);

g.Globals.mqttClient = mqtt.connect(g.Globals.mqttServerAddress);
g.Globals.mqttClient.on('connect', function () {
	console.log('MQTT Connecting... please wait')
	const opt = { qos: 2, retain: true };
	g.Globals.mqttClient.subscribe(g.Globals.invUpdatedTopic, opt, function (err) {
		if (err) {
			console.log(err, 'Error subscribing to inventory updated topic');
		}
	})

	g.Globals.mqttClient.subscribe(g.Globals.actionResponseTopic, opt, function (err) {
		if (err) {
			console.log(err, 'Error subscribing to add update topic');
		}
	})

	g.Globals.mqttClient.subscribe(g.Globals.shoppingListTopic, opt, function (err) {
		if (err) {
			console.log(err, 'Error subscribing to shopping list topic');
		}
	})

	console.log('MQTT connected and listening for events');
	log.verbose('MQTT connected and listening for events');
})

g.Globals.mqttClient.on('message', function (topic, message, packet) {
	let obj;
	if (packet.topic != null) {
		const stringBuf = packet.payload.toString('utf8');
		if (stringBuf.length == 0)
			return;
		obj = JSON.parse(stringBuf);
	}

	if (topic === g.Globals.invUpdatedTopic) {
		obj.sort((a, b) => {
			let fa = a.Description.toLowerCase(),
				fb = b.Description.toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});

		g.Globals.invListData = obj;
	}

	if (topic === g.Globals.shoppingListTopic)
		g.Globals.shoppingListData = obj;
})

// log.verbose('App Started')
app.get('/', (req, res) => {
	if (g.Globals.invListData == undefined)
		res.render('nolist')
	else
		res.render('index', { data: g.Globals.invListData, title: 'Inventory List' });
})
app.use(express.urlencoded({ extended: true }))
app.use('/consume', consumeView)
app.use('/addUpdate', addUpdateView)
app.use('/shoppingList', shoppingListView)

app.listen(port, () => {
	// log.verbose()
	console.log('Website listening');
})

// Close the client when the app is closing
p.on('SIGTERM', () => {
	// log.verbose('App Ended')
	g.Globals.mqttClient.end();
	console.log('MQTT Disconnected');
	console.log('Website shut down');
})