/**
 * Get the human-readable value for the InventoryType value
 * @param {Number} typeId data.InventoryType
 * @returns {Text}
 */
function getInventoryType(typeId) {
	switch (typeId) {
		case 0:
			return 'Piece';
		case 1:
			return 'Bulk';
	}
}

/**
 * Determine which item in the select dropdown is selected.  Sets the default value for new items as well
 * @param {object} data The entire inventory item
 * @param {Number} option The InventoryType for the select list item
 * @returns {Text} 'selected' or ''
 */
function setInventoryTypeSelected(data, option) {
	if (data == 'undefined') {
		// Default value
		return 1;
	}
	if (data?.InventoryType == 0 && option == 0) {
		return 'selected';
	}
	if (data?.InventoryType == 1 && option == 1) {
		return 'selected';
	}

	return '';
}