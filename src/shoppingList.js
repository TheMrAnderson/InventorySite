const g = require('./global');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
	next()
});

router.get('/', (req, res) => {
	if (g.Globals.shoppingListData == undefined)
		res.render('nolist')
	else
		res.render('shoppingList', { data: g.Globals.shoppingListData, title: 'Shopping List' });
})

module.exports = router;