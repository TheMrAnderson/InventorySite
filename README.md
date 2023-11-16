# Inventory Site

Site for the inventory system to manage inventory.  Send & receive inventory updates via MQTT.

This is the frontend part of the Inventory system for ClubAnderson.

## Variables

`LOGTOPIC`: MQTT topic to send the event logs from the app<br/>
`TOPICFOLDER`: MQTT folder for all events to be created within<br/>
`MQTTSERVERADDRESS`: MQTT broker address eg. mqtt://192.168.0.1<br/>

## Ports

`1883` MQTT Port<br/>
`3000` Website Port<br/>

## How to Use

When first launching it will show the entire inventory list, sorted by the description.  Adding/updating the inventory is also supported.
