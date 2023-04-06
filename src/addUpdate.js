const g = require('./global')
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
	next()
});

router.get('/', (req, res) => {
	const itemNumber = req.query.itemNumber
	let invItem;
	if (itemNumber === null || itemNumber === undefined) {
		;
	} else {
		invItem = g.Globals.invListData.find(i => i.ItemNumber == itemNumber);
	}

	res.render('addUpdate', {
		data: invItem
	});
});

router.post('/', (req, res) => {
	const opt = { qos: 2 };
	const obj = {
		CurrentQty: Number(req.body.currentQty),
		Description: req.body.description,
		SourceURL: req.body.sourceUrl,
		InventoryType: Number(req.body.inventoryType),
		Manufacturer: req.body.manufacturer,
		PartNumber: req.body.partNumber,
		MinQty: Number(req.body.minQty),
		Location: req.body.location
	}
	if (req.body.itemNumber.length > 0)
		obj.ItemNumber = req.body.itemNumber;
	g.Globals.mqttClient.publish(g.Globals.addUpdateItemTopic, JSON.stringify(obj), opt, function (err) {
		if (err) {
			console.log(err);
		}
	});

	if (req.body.itemNumber.length > 0) {
		// Go back to the list
		res.render('index', { data: g.Globals.invListData });
	} else {
		// Reload this page to allow additional items to be added
		res.render('addUpdate')
	}
});

module.exports = router