all:
	browserify client.js > www/browserify-bundle.js
	
index:
	browserify index.js > www/browserify-bundle.js

watch:
	browserify client.js -o www/browserify-bundle.js --watch --debug
