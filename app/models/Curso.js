const { model, Schema } = require('mongoose')

const cursoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  state: {
    type: String,
    required: true
  },
  startDate: Date,
  finishDate: Date,
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

const Course = model('Course', cursoSchema)

const create = async (newCursoData) => {
  const newCurso = new Course(newCursoData)

  const curso = await newCurso.save()
  return curso
}
const findById = async (id) => {
  const curso = await Course.findById(id)
  return curso
}

const find = async (data) => {
  return await Course.find(data)
}

const findByIdAndUpdate = async (id, newCursoData) => {
  return await Course.findByIdAndUpdate(id, newCursoData, { new: true })
}

const deleteOne = async (data) => {
  return await Course.deleteOne(data)
}

module.exports = { create, find, deleteOne, findById, findByIdAndUpdate }
