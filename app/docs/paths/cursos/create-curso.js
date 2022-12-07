module.exports = {
  post: {
    tags: ['Curso CRUD operations'],
    description: 'Create Cursos',
    operationId: 'createCursos',
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
      201: {
        description: 'Crear nuevo Curso',
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
