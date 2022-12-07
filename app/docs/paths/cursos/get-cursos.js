module.exports = {
  get: {
    tags: ['Curso CRUD operations'],
    description: 'Get Cursos',
    operationId: 'getCursos',
    responses: {
      200: {
        description: 'Listado de Cursos',
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
