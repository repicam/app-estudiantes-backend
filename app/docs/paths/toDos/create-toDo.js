module.exports = {
  post: {
    tags: ['ToDo CRUD operations'],
    description: 'Create ToDos',
    operationId: 'createToDos',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ToDoBody'
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
