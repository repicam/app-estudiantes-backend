module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Renueva el token que se pasa por el header si es válido',
    operationId: 'renewToken',
    responses: {
      200: {
        description: 'Información al renovar el token',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkUsersLogin'
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
