const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  cursos: [{
    type: Schema.Types.ObjectId,
    ref: 'Curso'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
    delete returnedObject._id
  }
})

const User = model('User', userSchema)

const find = async (data) => {
  return await User.findOne(data)
}

const findById = async (id) => {
  return await User.findById(id).populate('cursos')
}

const create = async (newUserData) => {
  const newUser = new User(newUserData)

  const user = await newUser.save()
  return user
}

const saveCursoIntoUser = async (curso, user) => {
  user.cursos = user.cursos.concat(curso._id)
  await user.save()
}

module.exports = { find, findById, create, saveCursoIntoUser }
