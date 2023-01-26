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
            type: 'object',
            properties: {
              imagen: {
                type: 'string',
                format: 'binary'
              }
            }
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
                      description: 'Id del usuario que hace login',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    name: {
                      type: 'string',
                      description: 'Nombre del usuario que hace login',
                      example: 'Java Script'
                    },
                    username: {
                      type: 'string',
                      description: 'Username del usuario que hace login',
                      example: 'JavaScriptCoder'
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
