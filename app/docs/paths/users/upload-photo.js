module.exports = {
  patch: {
    tags: ['User CRUD operations'],
    description: 'Cambiar foto Usuario',
    operationId: 'uploadPhoto',
    requestBody: {
      description: 'Body',
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/components/schemas/UserImage'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Modificar la imagen de perfil del usuario proporcionado en el token',
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
