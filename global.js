require('bare-abort-controller/global')
require('bare-crypto/global')
require('bare-encoding/global')
require('bare-events/global')
require('bare-fetch/global')
require('bare-performance/global')
require('bare-process/global')
require('bare-stream/global')
require('bare-worker/global')
require('bare-ws/global')

// Compatibility target: the current Node.js LTS line. Bare checks this value
// against `engines.node` when resolving packages, so bump it as LTS lines move.
process.versions.node = '24.21.0'
