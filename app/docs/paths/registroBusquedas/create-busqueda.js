module.exports = {
  post: {
    tags: ['Registro busquedas CRUD operations'],
    description: 'Create Historico Busquedas',
    operationId: 'createHistoricoBusquedas',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/SearchHistoryBody'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Crear nuevo ToDo',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkCreateBusqueda'
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
