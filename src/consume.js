const g = require('./global')
const mqtt = require('mqtt')
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
	next()
});

router.get('/', (req, res) => {
	res.render('consume');
});

router.post('/', (req, res) => {
	const opt = { qos: 2 };
	const itemNumber = req.body.itemNumber
	g.Globals.mqttClient.publish(g.Globals.invConsumeTopic, itemNumber, opt, function (err) {
		if (err) {
			console.log(err);
		}
	});

	// Go back to the main consume page
	res.render('consume')
})

module.exports = router