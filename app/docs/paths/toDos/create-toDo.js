module.exports = {
  post: {
    tags: ['ToDo CRUD operations'],
    description: 'Create ToDos',
    operationId: 'createToDos',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
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
                description: 'Completed',
                example: false
              }
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Create new ToDo',
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
                  $ref: '#/components/schemas/ToDo'
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
