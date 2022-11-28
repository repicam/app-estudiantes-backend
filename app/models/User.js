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
  imagen: {
    public_id: {
      type: String,
      default: null
    },
    secure_url: {
      type: String,
      default: 'https://res.cloudinary.com/app-estudiantes/image/upload/v1669534655/default_user_photo.png'
    }
  },
  cursos: [{
    type: Schema.Types.ObjectId,
    ref: 'Curso'
  }],
  toDos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
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
  return await User.findById(id).populate('cursos').populate('toDos')
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

const saveToDoIntoUser = async (todo, user) => {
  user.toDos = user.toDos.concat(todo._id)
  await user.save()
}

const update = async (id, newUserData) => {
  return await User.findByIdAndUpdate(id, newUserData, { new: true })
}

module.exports = { find, findById, create, saveCursoIntoUser, saveToDoIntoUser, update }
