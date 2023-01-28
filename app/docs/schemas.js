module.exports = {
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Identificador del Usuario',
            example: '6481ce39ee3c501fd24667ef'
          },
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
          email: {
            type: 'string',
            description: 'Email del Usuario',
            example: 'javascript@gmail.com'
          },
          password: {
            type: 'boolean',
            description: 'Hash de la contraseña del Usuario',
            example: '$2y$10$salt56789012345678901uTWNlUnhu5K/xBrtKYTo7oDy8zMr/csu'
          },
          imagen: {
            type: 'object',
            properties: {
              public_id: {
                type: 'string',
                description: 'Identificador de la imagen en cloudinary',
                example: '6481ce39ee3c501fd24667ef'
              },
              secure_url: {
                type: 'string',
                description: 'URL de la imagen en cloudinary',
                example: 'https://res.cloudinary.com/app-estudiantes/image/upload/v1669534655/default_user_photo.png'
              }
            }
          },
          seguridad: {
            type: 'object',
            properties: {
              verificado: {
                type: 'boolean',
                description: 'Indica si el usuario está verificado',
                example: true
              },
              cryptoToken: {
                type: 'string',
                description: 'Almacena el crypto token para verificar el usuario por la url y para el proceso de restaurar contraseña',
                example: '50881c2819427dc9070d1ab82d14a91b'
              },
              restaurarPassword: {
                type: 'boolean',
                description: 'Indica si el usuario a comenzado un proceso de restaurar contraseña',
                example: false
              }
            }
          },
          course: {
            type: 'array',
            items: { $ref: '#/components/schemas/Course' },
            description: 'Contiene todos los cursos del Usuario'
          },
          toDos: {
            type: 'array',
            items: { $ref: '#/components/schemas/ToDo' },
            description: 'Contiene todos los toDos del Usuario'
          },
          searches: {
            type: 'array',
            items: { $ref: '#/components/schemas/SearchHistory' },
            description: 'Contiene todos los registros de búsqueda del Usuario'
          }
        }
      },
      ToDo: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Identificador del ToDo',
            example: '6381cf39ee3c502fd24607ec'
          },
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
          },
          userId: {
            type: 'string',
            description: 'Id del usuario que crea el ToDo',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      },
      Course: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Identificador del ToDo',
            example: '6381cf39ee3c502fd24607ec'
          },
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
          estado: {
            type: 'string',
            description: 'Estado del Curso',
            example: 'EP'
          },
          fechaInicio: {
            type: 'date',
            description: 'Fecha inicio del Curso',
            example: '2022-12-01'
          },
          fechaFin: {
            type: 'date',
            description: 'Fecha fin del Curso',
            example: '2022-12-20'
          },
          userId: {
            type: 'string',
            description: 'Id del usuario que crea el ToDo',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      },
      SearchHistory: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Identificador del ToDo',
            example: '6381cf39ee3c502fd24607ec'
          },
          busqueda: {
            type: 'string',
            description: 'Búsqueda del usuario que registraremos',
            example: 'JavaScript'
          },
          userId: {
            type: 'string',
            description: 'Id del usuario que registra la búsqueda',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      }
    }
  }
}
