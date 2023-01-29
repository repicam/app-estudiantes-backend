module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Change Password',
    operationId: 'changePassword',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
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
      200: {
        description: 'Request to change the password of the indicated email',
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
                    msg: {
                      type: 'string',
                      description: 'Info',
                      example: 'You have requested to change your password'
                    },
                    cryptoToken: {
                      type: 'string',
                      description: 'User crypto token',
                      example: '50881c2819427dc9070d1ab82d14a91b'
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
