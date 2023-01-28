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
            type: 'object',
            properties: {
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
      200: {
        description: 'Solicitar cambio contraseña del email indicado',
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
                      description: 'Id del usuario que solicita el cambio de contraseña',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    msg: {
                      type: 'string',
                      description: 'Información al usuario',
                      example: 'Ha solicitado cambiar la contraseña'
                    },
                    cryptoToken: {
                      type: 'string',
                      description: 'Informa el crypto token para controlar mas exacto el usuario por la url',
                      example: '50881c2819427dc9070d1ab82d14a91b'
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
                  example: 'Error getting user'
                }
              }
            }
          }
        }
      }
    }
  }
}
