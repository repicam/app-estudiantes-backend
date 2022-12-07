module.exports = {
  get: {
    tags: ['ToDo CRUD operations'],
    description: 'Get ToDo',
    operationId: 'getToDo',
    responses: {
      200: {
        description: 'ToDo correspondiente al id indicado',
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
