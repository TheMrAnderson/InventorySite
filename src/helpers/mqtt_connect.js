import { error, verbose } from '../helpers/ca_log';
import { Globals } from '../global';
import { onMqttMessage } from './mqtt_message'
import mqtt from 'mqtt';

export const mqttSetup = (invListItems, shoppingListItems) => {
	Globals.mqttClient = mqtt.connect(Globals.mqttServerAddress);
	Globals.mqttClient.on('connect', function () {
		onMqttConnect();
	})

	Globals.mqttClient.on('message', function (topic, message, packet, invListItems, shoppingListItems) {
		onMqttMessage(topic, message, packet, invListItems, shoppingListItems);
	})
}

const onMqttConnect = () => {
	const opt = { qos: 2, retain: true };
	Globals.mqttClient.subscribe(Globals.invConsumeTopic, opt, function (err) {
		if (err) {
			error('Error subscribing to inventory consume topic', err)
		}
	});

	Globals.mqttClient.subscribe(Globals.addUpdateItemTopic, opt, function (err) {
		if (err) {
			error('Error subscribing to add update topic', err);
		}
	});

	Globals.mqttClient.subscribe(Globals.shoppingListTopic, opt, function (err) {
		if (err) {
			error('Error subscribing to shopping list topic', err);
		}
	})

	verbose('App online and listening for events');
}