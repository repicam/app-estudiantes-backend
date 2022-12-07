module.exports = {
  put: {
    tags: ['User CRUD operations'],
    description: 'Cambio password',
    operationId: 'updatePassword',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              password: {
                type: 'string',
                description: 'Nueva password',
                example: 'Nuev@Passw0rd'
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Cambio de password del usuario',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  description: 'Indicador peticion correcta',
                  example: true
                },
                data: {
                  type: 'object',
                  properties: {
                    msg: {
                      type: 'string',
                      description: 'Información al usuario',
                      example: 'La password ha sido actualizada'
                    }
                  }
                },
                errorMsg: {
                  type: 'string',
                  description: 'Contiene el mensaje de error',
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
                  description: 'Indicador peticion correcta',
                  example: false
                },
                data: {
                  type: 'string',
                  description: 'Contiene la data a devolver',
                  example: null
                },
                errorMsg: {
                  type: 'string',
                  description: 'Contiene el mensaje de error',
                  example: 'Error obteniendo el usuario'
                }
              }
            }
          }
        }
      }
    }
  }
}
