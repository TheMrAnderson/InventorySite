const g = require('./global')
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
	next()
});

router.get('/', (req, res) => {
	res.render('addUpdate')
});

router.post('/', (req, res) => {
	const opt = { qos: 2 };
	const obj = {
		ItemNumber: Number(req.body.itemNumber),
		CurrentQty: req.body.currentQty,
		Description: req.body.description,
		SourceUrl: req.body.sourceUrl,
		InventoryType: Number(req.body.inventoryType),
		Manufacturer: req.body.manufacturer,
		PartNumber: req.body.partNumber,
		MinQty: Number(req.body.minQty),
		Location: req.body.location
	}
	g.Globals.mqttClient.publish(g.Globals.addUpdateItemTopic, JSON.stringify(obj), opt, function (err) {
		if (err) {
			console.log(err);
		}
	});

	// Go back to the main addUpdate page
	res.render('addUpdate')
});

module.exports = router