# build image from Dockerfile
build-image:
	docker build -t themranderson/inventorysite:latest .

# create container using the image created by Dockerfile
run-image:
	docker run -e "MQTTSERVERADDRESS=mqtt://172.30.62" -e "LOGTOPIC=logs" -e "TOPICFOLDER=inventory_prod" themranderson/inventorysite:latest

# stop running containers
down:
	docker kill $(docker container ls -q)