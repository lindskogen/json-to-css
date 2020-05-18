run:
	deno run src/mod.ts

test:
	deno test

dist/out.js: src/mod.ts
	mkdir -p dist
	echo "bundling..."
	deno bundle src/mod.ts dist/out.js

deploy: dist/out.js
	echo "deployed to server"

clean:
	rm dist/*.js