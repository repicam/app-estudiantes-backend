module.exports = {
  put: {
    tags: ['User CRUD operations'],
    description: 'Cambio password',
    operationId: 'updatePassword',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserPassword'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Cambio de password del usuario',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkResetPassword'
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
