module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Registrar Usuario',
    operationId: 'registrarUsuario',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserRegistro'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Registro para usuarios',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkUsersRegistro'
            }
          }
        }
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseUserExists'
            }
          }
        }
      }
    }
  }
}
