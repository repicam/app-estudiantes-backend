module.exports = {
  get: {
    tags: ['Registro busquedas CRUD operations'],
    description: 'Get Historico Busquedas',
    operationId: 'getHistoricoBusquedas',
    responses: {
      200: {
        description: 'Listado de Historico Busquedas',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkGetBusquedas'
            }
          }
        }
      },
      401: {
        description: 'No autorizado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseNonAuthorization'
            }
          }
        }
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseUserError'
            }
          }
        }
      }
    }
  }
}
