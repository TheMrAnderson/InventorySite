# Inventory Site

Website to view and update inventory for ClubAnderson.  Updates are sent via MQTT.

## Variables

- `LOGTOPIC`: MQTT topic to send the event logs from the app
- `TOPICFOLDER`: MQTT folder for all events to be created within
- `MQTTSERVERADDRESS`: MQTT broker address eg. mqtt://192.168.0.1
- `MAXRATELIMIT`: Maximum number of web requests per minute to allow before limiting the client

## Ports

- `1883` MQTT Port
- `3000` Website Port

## How to Use

When first launching it will show the entire inventory list, sorted by the description.  Click on an item to update it.  Actions drop down has the available actions

- **Add** Add an inventory item
- **Consume** Dedicated page to connect a scanner to, or just quickly enter in a inventory number to consume one
- **View Shopping List** As inventory is consumed it will eventually reach a threshold. At this point it's added to the shopping list. Here you can view everything on the shopping list
