import { Globals } from '../global';

export const onMqttMessage = (topic, message, packet, invListItems, shoppingListItems) => {
	let obj;
	if (packet.topic != null) {
		const stringBuf = packet.payload.toString('utf8');
		if (stringBuf.length === 0)
			return;
		obj = JSON.parse(stringBuf);
	}

	if (topic === Globals.invUpdatedTopic) {
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

		invListItems = obj;
	}

	if (topic === Globals.shoppingListTopic)
		shoppingListItems = obj;
}
