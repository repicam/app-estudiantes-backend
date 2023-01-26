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
                    id: {
                      type: 'string',
                      description: 'Id del usuario que se ha registrado',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    username: {
                      type: 'string',
                      description: 'Username del usuario que hace login',
                      example: 'JavaScriptCoder'
                    },
                    verificado: {
                      type: 'boolean',
                      description: 'Indica si el usuario ha sido verificado',
                      example: true
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
