module.exports = {
  delete: {
    tags: ['ToDo CRUD operations'],
    description: 'Delete ToDo',
    operationId: 'deleteToDo',
    responses: {
      200: {
        description: 'Eliminar ToDo correspondiente al id indicado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkDelete'
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
