.PHONY: docker-build docker-run

USERNAME = jairorojas
PROJECT = profile-web
TAG = dev

docker-build:
	docker build -t ${USERNAME}/${PROJECT}:${TAG} .

docker-run:
	docker run -v ${PWD}/app:/home/node/app -p 3001:3000 --rm ${USERNAME}/${PROJECT}:${TAG}

docker-compile:
	docker run -v ${PWD}/app:/home/node/app --entrypoint="npm" ${USERNAME}/${PROJECT}:${TAG} run-script build