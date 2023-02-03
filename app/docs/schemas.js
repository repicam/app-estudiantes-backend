module.exports = {
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'User Id',
            example: '6481ce39ee3c501fd24667ef'
          },
          username: {
            type: 'string',
            description: 'Username',
            example: 'JavaScriptCoder'
          },
          name: {
            type: 'string',
            description: 'Name',
            example: 'Java Script'
          },
          email: {
            type: 'string',
            description: 'Email',
            example: 'javascript@gmail.com'
          },
          password: {
            type: 'boolean',
            description: 'Password hashed',
            example: '$2y$10$salt56789012345678901uTWNlUnhu5K/xBrtKYTo7oDy8zMr/csu'
          },
          image: {
            type: 'object',
            properties: {
              public_id: {
                type: 'string',
                description: 'Cloudinary Id',
                example: '6481ce39ee3c501fd24667ef'
              },
              secure_url: {
                type: 'string',
                description: 'Cloudinary URL',
                example: 'https://res.cloudinary.com/app-estudiantes/image/upload/v1669534655/default_user_photo.png'
              }
            }
          },
          security: {
            type: 'object',
            properties: {
              verified: {
                type: 'boolean',
                description: 'User verified?',
                example: true
              },
              cryptoToken: {
                type: 'string',
                description: 'Crypto token to check the user',
                example: '50881c2819427dc9070d1ab82d14a91b'
              },
              restorePassword: {
                type: 'boolean',
                description: 'Restore password?',
                example: false
              }
            }
          },
          courses: {
            type: 'array',
            items: { $ref: '#/components/schemas/Course' },
            description: 'User courses'
          },
          toDos: {
            type: 'array',
            items: { $ref: '#/components/schemas/ToDo' },
            description: 'User toDos'
          },
          searches: {
            type: 'array',
            items: { $ref: '#/components/schemas/Search' },
            description: 'User searches'
          }
        }
      },
      ToDo: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ToDo Id',
            example: '6381cf39ee3c502fd24607ec'
          },
          title: {
            type: 'string',
            description: 'Title',
            example: 'JavaScript'
          },
          description: {
            type: 'string',
            description: 'Description',
            example: 'Coding in JavaScript'
          },
          completed: {
            type: 'boolean',
            description: 'Completed toDo?',
            example: false
          },
          user: {
            type: 'string',
            description: 'User Id',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      },
      Course: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Course Id',
            example: '6381cf39ee3c502fd24607ec'
          },
          title: {
            type: 'string',
            description: 'Title',
            example: 'JavaScript'
          },
          description: {
            type: 'string',
            description: 'Description',
            example: 'Coding in JavaScript'
          },
          state: {
            type: 'string',
            description: 'State',
            example: 'IP'
          },
          startDate: {
            type: 'date',
            description: 'Start date',
            example: '2022-12-01'
          },
          finishDate: {
            type: 'date',
            description: 'Finish date',
            example: '2022-12-20'
          },
          user: {
            type: 'string',
            description: 'User Id',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      },
      Search: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Id',
            example: '6381cf39ee3c502fd24607ec'
          },
          text: {
            type: 'string',
            description: 'Text',
            example: 'JavaScript'
          },
          user: {
            type: 'string',
            description: 'User Id',
            example: '6481ce39ee3c501fd24667ef'
          }
        }
      }
    }
  }
}
