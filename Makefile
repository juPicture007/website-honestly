BIN=./bin
PUBLISH_SERVICE=$(BIN)/publish-service.sh

NBIN=./node_modules/.bin
WEBPACK=$(NBIN)/webpack

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


badger: ## Red Badger 4 lyfe!
	@cat assets/badger.txt


clean: ## Remove compiled files
	rm -rf dist


build: dist/publish-service.zip ## Compile project


dist/publish-service.zip: dist/publish-service/index.js
	cd dist/publish-service && zip -r ../publish-service.zip *


dist/publish-service/index.js:
	$(WEBPACK)


publish-service-deploy: dist/publish-service.zip ## Upload the publish service to AWS Lambda
	$(PUBLISH_SERVICE) deploy


publish-service-invoke: ## Invoke the publish service
	$(PUBLISH_SERVICE) invoke


.PHONY: \
	help \
	clear \
	build \
	badger \
	publish-service-deploy \
	publish-service-invoke
