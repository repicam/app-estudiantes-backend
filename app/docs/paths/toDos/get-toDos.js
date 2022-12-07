module.exports = {
  get: {
    tags: ['ToDo CRUD operations'],
    description: 'Get ToDos',
    operationId: 'getToDos',
    responses: {
      200: {
        description: 'Listado de ToDos',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkToDos'
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
