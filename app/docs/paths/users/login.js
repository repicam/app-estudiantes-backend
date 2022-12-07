module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Login Usuario',
    operationId: 'loginUsuario',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserLogin'
          }
        }
      }
    },
    parameters: [],
    responses: {
      200: {
        description: 'Login para usuarios',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkUsersLogin'
            }
          }
        }
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseKoUserLogin'
            }
          }
        }
      }
    }
  }
}
