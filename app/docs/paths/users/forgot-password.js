module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Solicitud cambio contraseña',
    operationId: 'cambioPassword',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserEmail'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Solicitar cambio contraseña del email indicado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkForgotPassword'
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
