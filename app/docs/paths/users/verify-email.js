module.exports = {
  get: {
    tags: ['User CRUD operations'],
    description: 'Verificar Usuario',
    operationId: 'verificarUsuario',
    responses: {
      200: {
        description: 'Verificación del Usuario',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkUsersVerify'
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
