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
            type: 'object',
            properties: {
              username: {
                type: 'string',
                description: 'Username del Usuario',
                example: 'JavaScriptCoder'
              },
              name: {
                type: 'string',
                description: 'Name del Usuario',
                example: 'Java Script'
              },
              password: {
                type: 'string',
                description: 'Contraseña del Usuario',
                example: 'MiPassw0rd'
              },
              email: {
                type: 'string',
                description: 'Email del Usuario',
                example: 'javascript@gmail.com'
              }
            }
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
                      description: 'Id del usuario que se ha registrado',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    message: {
                      type: 'string',
                      description: 'Mensaje informativo al usuario',
                      example: 'Registrado correctamente. Debe verificar la cuenta. Revise su correo'
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
                  example: 'Email y/o username ya existe. Pruebe a iniciar sesión'
                }
              }
            }
          }
        }
      }
    }
  }
}
