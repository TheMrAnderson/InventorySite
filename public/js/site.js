function editTableRow(id) {
	// Open edit page and pass the id (ItemNumber) as a parameter
}

function getInventoryType(typeId) {
	switch (typeId) {
		case 0:
			return 'Piece';
		case 1:
			return 'Bulk';
	}
}