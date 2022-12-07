module.exports = {
  delete: {
    tags: ['Curso CRUD operations'],
    description: 'Delete Curso',
    operationId: 'deleteCurso',
    responses: {
      200: {
        description: 'Eliminar Curso correspondiente al id indicado',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResponseOkDelete'
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
