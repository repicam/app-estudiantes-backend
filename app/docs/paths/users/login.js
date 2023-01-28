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
            type: 'object',
            properties: {
              email: {
                type: 'string',
                description: 'Email del Usuario',
                example: 'javascript@gmail.com'
              },
              password: {
                type: 'boolean',
                description: 'Contraseña del Usuario',
                example: 'MiPassw0rd'
              }
            }
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
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  description: 'Correct?',
                  example: true
                },
                data: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'User Id',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    name: {
                      type: 'string',
                      description: 'Name',
                      example: 'Java Script'
                    },
                    username: {
                      type: 'string',
                      description: 'Username',
                      example: 'JavaScriptCoder'
                    },
                    token: {
                      type: 'string',
                      description: 'Token de sesion del usuario que hace login',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGEyZWEzZjc2YTU0YWM5NTgzZjAyYyIsIm5hbWUiOiJJdmFuIiwiaWF0IjoxNjcwMTgyMTU5LCJleHAiOjE2NzAyMjUzNTl9.sW06uh1lMHtGrJ4ewk69WdhTQhXqzMfMA9B1kOuztyQ'
                    },
                    imagen: {
                      type: 'string',
                      description: 'Imagen de perfil del usuario que hace login',
                      example: 'https://res.cloudinary.com/app-estudiantes/image/upload/v1669534655/default_user_photo.png'
                    }
                  }
                },
                errorMsg: {
                  type: 'string',
                  description: 'Error message',
                  example: null
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  description: 'Correct?',
                  example: false
                },
                data: {
                  type: 'string',
                  description: 'Data',
                  example: null
                },
                errorMsg: {
                  type: 'string',
                  description: 'Error message',
                  example: 'Email o password incorrecto'
                }
              }
            }
          }
        }
      }
    }
  }
}
