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
  image: {
    public_id: {
      type: String,
      default: null
    },
    secure_url: {
      type: String,
      default: 'https://res.cloudinary.com/app-estudiantes/image/upload/v1669534655/default_user_photo.png'
    }
  },
  security: {
    verified: Boolean,
    cryptoToken: String,
    restorePassword: Boolean
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }],
  toDos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }],
  searches: [{
    type: Schema.Types.ObjectId,
    ref: 'Search'
  }],
  favourites: [{
    type: Schema.Types.ObjectId,
    ref: 'Favourite'
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
  return await User.findById(id)
    .populate('courses')
    .populate('toDos')
    .populate('searches')
    .populate('favourites')
}

const create = async (newUserData) => {
  const newUser = new User(newUserData)

  const user = await newUser.save()
  return user
}

const saveCursoIntoUser = async (curso, user) => {
  user.courses = user.courses.concat(curso._id)
  await user.save()
}

const saveToDoIntoUser = async (todo, user) => {
  user.toDos = user.toDos.concat(todo._id)
  await user.save()
}

const update = async (id, newUserData) => {
  return await User.findByIdAndUpdate(id, newUserData, { new: true })
}

const saveSearchIntoUser = async (search, user) => {
  user.searches = user.searches.concat(search._id)
  await user.save()
}

const saveFavouriteIntoUser = async (fav, user) => {
  user.favourites = user.favourites.concat(fav._id)
  await user.save()
}

module.exports = {
  find,
  findById,
  create,
  saveCursoIntoUser,
  saveToDoIntoUser,
  update,
  saveSearchIntoUser,
  saveFavouriteIntoUser
}
