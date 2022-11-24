const { createResponse } = require('../utils/responseGenerator')

const unknownEndpoint = (request, response) => {
  return createResponse(false, null, 'Endpoint no registrado', 404)
}

module.exports = unknownEndpoint
