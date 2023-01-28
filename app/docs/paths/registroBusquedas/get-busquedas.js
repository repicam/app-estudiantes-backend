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
                  description: 'Indicador peticion correcta',
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
                  description: 'Contiene el mensaje de error',
                  example: null
                }
              }
            }
          }
        }
      },
      401: {
        description: 'No autorizado',
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
                  example: 'Tu petición no tiene cabecera de autorización o es incorrecta'
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
