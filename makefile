all:

publish: dummy
	rm -r docs
	npm run build
	mv dist docs && rm -f docs/favicon.ico

dummy:
