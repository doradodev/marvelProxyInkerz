'use strict'

const Boom = require('boom')
const Joi = require('joi')

const API = require('../services/apiService');

module.exports = {
  name: 'api-rest',
  version: '1.0.0',
  async register (server, options) {
    const prefix = options.prefix || 'api'

    server.route({
      method: 'GET',
      path: `/${prefix}/characters`,
      handler: async (req, h) => {
        let result
        try {
          result = await API.getCharacters(20,10);
          if (!result) {
            return Boom.notFound(`character not found`)
          }
        } catch (error) {
          return Boom.badImplementation(`error searching  ${error}`)
        }
        return result
      }
    })
  }
}