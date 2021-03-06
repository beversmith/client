// @flow
// React-native tooling assumes this file is here, so we just require our real entry point
import './app/globals.native'

// Load storybook or the app
if (__STORYBOOK__) {
  // MUST happen first
  const {inject} = require('./stories/mock-react-redux')
  inject()
  const load = require('./stories/index.native.js').default
  load()
} else {
  const {load} = require('./app/index.native')
  load()
}
