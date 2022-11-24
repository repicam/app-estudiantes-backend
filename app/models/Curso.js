const { model, Schema } = require('mongoose')

const cursoSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: String,
  estado: {
    type: String,
    required: true
  },
  fechaInicio: Date,
  fechaFin: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

cursoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

const Curso = model('Curso', cursoSchema)

const create = async (newCursoData) => {
  const newCurso = new Curso(newCursoData)

  const curso = await newCurso.save()
  return curso
}

module.exports = { create }
