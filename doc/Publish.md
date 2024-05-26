## How to publish to npm(prod)

After you are finished developing and you want to publish a new version you need to:

1. Go to `package.json` file and update the version to `+1` - ex: from `"version": "1.0.23"` to `"version": "1.0.24"`
2. Then execute in the terminal `npm run build:prod` to build the the app for `prod`
3. Then execute `npm publish`
