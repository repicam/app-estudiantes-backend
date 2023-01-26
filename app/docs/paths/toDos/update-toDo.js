module.exports = {
  patch: {
    tags: ['ToDo CRUD operations'],
    description: 'Update ToDo',
    operationId: 'updateToDo',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              titulo: {
                type: 'string',
                description: 'Titulo del ToDo',
                example: 'JavaScript'
              },
              descripcion: {
                type: 'string',
                description: 'Descripción del ToDo',
                example: 'Coding in JavaScript'
              },
              completado: {
                type: 'boolean',
                description: 'Estado del ToDo',
                example: false
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Modificar ToDo correspondiente al id indicado',
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
                  $ref: '#/components/schemas/ToDo'
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
