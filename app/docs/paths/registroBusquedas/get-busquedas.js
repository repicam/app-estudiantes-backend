module.exports = {
  get: {
    tags: ['Historical search CRUD operations'],
    description: 'Get Historico Busquedas',
    operationId: 'getHistoricoBusquedas',
    responses: {
      200: {
        description: 'Listado de Historico Busquedas',
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
                    userId: {
                      type: 'string',
                      description: 'Id del usuario que realiza la acción',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    historial: {
                      type: 'array',
                      items: {
                        type: 'string',
                        description: 'Búsqueda registrada',
                        example: 'JavaScript'
                      },
                      description: 'Contiene todos los registros de búsqueda del Usuario'
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
      401: {
        description: 'Non authorized',
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
                  example: 'Your request does not have an authorization header or it is incorrect'
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
