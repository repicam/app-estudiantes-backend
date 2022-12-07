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
          cursos: {
            type: 'array',
            items: { $ref: '#/components/schemas/Curso' },
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
      UserRegistro: {
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
      },
      UserLogin: {
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
      },
      UserEmail: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Email del Usuario',
            example: 'javascript@gmail.com'
          }
        }
      },
      UserPassword: {
        type: 'object',
        properties: {
          password: {
            type: 'string',
            description: 'Nueva password',
            example: 'Nuev@Passw0rd'
          }
        }
      },
      UserImage: {
        type: 'object',
        properties: {
          imagen: {
            type: 'string',
            format: 'binary'
          }
        }
      },
      UserUpdate: {
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
      ToDoBody: {
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
      },
      Curso: {
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
      CursoBody: {
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
          estado: {
            type: 'string',
            description: 'Estado del Curso',
            example: 'EP'
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
      },
      SearchHistoryBody: {
        type: 'object',
        properties: {
          busqueda: {
            type: 'string',
            description: 'Búsqueda del usuario que registraremos',
            example: 'JavaScript'
          }
        }
      },
      ResponseOkCursos: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            description: 'Indicador peticion correcta',
            example: true
          },
          data: {
            $ref: '#/components/schemas/Curso'
          },
          errorMsg: {
            type: 'string',
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkToDos: {
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
      },
      ResponseOkUsersRegistro: {
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
              message: {
                type: 'string',
                description: 'Mensaje informativo al usuario',
                example: 'Registrado correctamente. Debe verificar la cuenta. Revise su correo'
              }
            }
          },
          errorMsg: {
            type: 'string',
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkUsersLogin: {
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
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkUsersBase: {
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
      },
      ResponseOkUsersVerify: {
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
      },
      ResponseOkGetBusquedas: {
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
      },
      ResponseOkCreateBusqueda: {
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
              busqueda: {
                type: 'string',
                description: 'Búsqueda registrada',
                example: 'JavaScript'
              }
            }
          },
          errorMsg: {
            type: 'string',
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkDelete: {
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
              }
            }
          },
          errorMsg: {
            type: 'string',
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkForgotPassword: {
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
            description: 'Contiene el mensaje de error',
            example: null
          }
        }
      },
      ResponseOkResetPassword: {
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
      },
      ResponseNonAuthorization: {
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
      },
      ResponseUserError: {
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
      },
      ResponseUserExists: {
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
            example: 'Email y/o username ya existe. Pruebe a iniciar sesión'
          }
        }
      },
      ResponseKoUserLogin: {
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
            example: 'Email o password incorrecto'
          }
        }
      }
    }
  }
}
