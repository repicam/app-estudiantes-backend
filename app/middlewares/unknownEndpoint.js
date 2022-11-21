const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Endpoint no registrado' })
}

module.exports = unknownEndpoint
