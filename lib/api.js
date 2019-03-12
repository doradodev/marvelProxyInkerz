'use strict'

const Boom = require('boom')
const Joi = require('joi')

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
        try {
          result = await API.getCharacters(20,10);
          result = character.character(result.data.results)
          if (!result) {
            return Boom.notFound(`character not found`)
          }
        } catch (error) {
          return Boom.badImplementation(`error searching  ${error}`)
        }
        return result
      }
    })

    server.route({
      method: 'GET',
      path: `/${prefix}/character/{query}`,
      options: {
        validate: {
          params: {
            key: Joi.string().required()
          },
          query: failValidation
        }
      },
      handler: async (req, h) => {
        let result
        try {
          result = await API.getCharactersByNameQuery(req.params.query,20,10);
          result = character.character(result.data.results)
          if (!result) {
            return Boom.notFound(`No se pudo encontrar la pregunta ${req.params.key}`)
          }
        } catch (error) {
          return Boom.badImplementation(`Hubo un error buscando ${req.params.key} - ${error}`)
        }

        return result
      }
    })

    function failValidation (req, h, err) {
      return Boom.badRequest('wrong parameters')
    }
  }
}