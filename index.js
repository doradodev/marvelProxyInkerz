'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const path = require('path')
const API = require('./services/apiService');

const server = Hapi.server({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'public')
    }
  }
})

async function init () {
  try {


    await server.register(inert)
    await server.register({
      plugin: require('hapi-cors'),
      options: {
        origins: ['*'],
        allowCredentials: 'true',
        exposeHeaders: ['content-type', 'content-length'],
        maxAge: 600,
        methods: ['POST, GET, OPTIONS'],
        headers: ['Accept', 'Content-Type', 'Authorization']
      }
    })
    await server.register({
      plugin: require('./lib/api'),
      options: {
        prefix: 'api'
      }
    })

    server.method('getCharacters', API.getCharacters, {
      cache:{
        expiresIn: 1000 * 60,
        generateTimeout: 2000
      }
    })

    server.route({
      method: 'GET',
      path: '/home',
      handler: (req, h) => {
        return h.file('index.html')
      }
    })

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          index: ['index.html']
        }
      }
    })


    await server.start()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  console.log(`Server running at: ${server.info.uri}`)
}

init()