const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-auth'] = require('..\\middleware\\check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['locale'] = require('..\\middleware\\locale.js')
middleware['locale'] = middleware['locale'].default || middleware['locale']

export default middleware
