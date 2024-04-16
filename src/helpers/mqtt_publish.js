import { Globals } from '../global';

export const publish = async (data, topic, qos = 0, retain = false) => {
	try {
		const opt = { qos: qos, retain: retain };
		Globals.mqttClient.publish(topic, data, opt, function (err) {
			if (err) {
				console.log('Error in mqttClient.publish', err);
			}
		});
	}
	catch (err) {
		console.log('Error publishing MQTT message to topic', err)
	}
}

export const publishInvUpdated = async (data) => {
	const dString = JSON.stringify(data);
	await publish(dString, Globals.invUpdatedTopic, 1, true);
}

export const publishShoppingList = async (data) => {
	const dString = JSON.stringify(data);
	await publish(dString, Globals.shoppingListTopic, 1, true);
}
