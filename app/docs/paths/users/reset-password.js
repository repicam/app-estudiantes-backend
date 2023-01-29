module.exports = {
  post: {
    tags: ['User CRUD operations'],
    description: 'Update password',
    operationId: 'updatePassword',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              password: {
                type: 'string',
                description: 'New password',
                example: 'New@Passw0rd'
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Change password',
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
                    msg: {
                      type: 'string',
                      description: 'Info',
                      example: 'The password has been updated'
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
