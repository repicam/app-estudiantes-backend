module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'User Register',
    operationId: 'userRegister',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
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
              password: {
                type: 'string',
                description: 'Password',
                example: 'MiPassw0rd'
              },
              email: {
                type: 'string',
                description: 'Email',
                example: 'javascript@gmail.com'
              }
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Register',
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
                      description: 'User Id',
                      example: '6481ce39ee3c501fd24667ef'
                    },
                    message: {
                      type: 'string',
                      description: 'Info',
                      example: 'Registered successfully. You must verify the account. Check your mail'
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
                  example: 'Invalid Email/Username'
                }
              }
            }
          }
        }
      }
    }
  }
}
