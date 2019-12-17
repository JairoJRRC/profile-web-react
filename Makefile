.PHONY: docker-build docker-run

USERNAME = jairorojas
PROJECT = profile-web
TAG = dev

docker-build:
	docker build -t ${USERNAME}/${PROJECT}:${TAG} .

docker-run:
	docker run -v ${PWD}/app:/usr/src/app -p 3001:3000 --rm ${USERNAME}/${PROJECT}:${TAG}