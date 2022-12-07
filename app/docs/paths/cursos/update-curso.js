module.exports = {
  patch: {
    tags: ['Curso CRUD operations'],
    description: 'Update Curso',
    operationId: 'updateCurso',
    requestBody: {
      description: 'Body',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CursoBody'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Modificar Curso correspondiente al id indicado',
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
