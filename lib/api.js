'use strict'

const Boom = require('boom')

const API = require('../services/apiService');
const character = require('../controllers/character');

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
        let characters
        try {
          if(req.query.nameStartsWith === ''){
            result = await req.server.methods.getCharacters(req.query.limit, req.query.offset)
          }else{
            result = await API.getCharactersByNameQuery(req.query.nameStartsWith,req.query.limit,req.query.offset);
          }
          characters = character.character(result.data.results)
          result = {
            offset: result.data.offset,
            limit: result.data.limit,
            total: result.data.total,
            count: result.data.count,
            result: characters
          }
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