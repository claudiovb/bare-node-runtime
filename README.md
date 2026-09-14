# bare-node-runtime

Compatibility layer for Node.js builtins and globals in Bare.

```
npm i bare-node-runtime
```

## Usage

```js
require('bare-node-runtime/global')

require('some-nodejs-package', {
  with: { imports: 'bare-node-runtime/imports' }
})
```

## Node.js compatibility target

`bare-node-runtime/global` sets `process.versions.node` to the current Node.js LTS release. Bare validates this value against the `engines.node` range of every package it resolves, so packages that require a supported Node.js version load without `UNSUPPORTED_ENGINE`. It does not imply full API parity with that release.

## License

Apache-2.0
