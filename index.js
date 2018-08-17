const path = require('path')

// This code allows us to use ES6, and import modules relative to the `src` directory. Making our imports tidier.
require('app-module-path').addPath(path.join(__dirname, 'src'))
require('babel-register')({ cache: true })
require('babel-polyfill')
require('./server')
