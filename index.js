const path = require('path')

require('app-module-path').addPath(path.join(__dirname, 'src'))
require('babel-register')({ cache: true })
require('babel-polyfill')
require('./server')
