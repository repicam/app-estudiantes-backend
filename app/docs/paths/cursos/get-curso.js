module.exports = {
  get: {
    tags: ['Curso CRUD operations'],
    description: 'Get Curso',
    operationId: 'getCurso',
    responses: {
      200: {
        description: 'Curso correspondiente al id indicado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkCursos'
            }
          }
        }
      },
      401: {
        description: 'No autorizado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseNonAuthorization'
            }
          }
        }
      },
      400: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseUserError'
            }
          }
        }
      }
    }
  }
}
