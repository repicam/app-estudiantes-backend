module.exports = {
  patch: {
    tags: ['User CRUD operations'],
    description: 'Modificar Usuario',
    operationId: 'updateUsuario',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/UserUpdate'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Modificar información del usuario proporcionado en el token',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkUsersBase'
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
