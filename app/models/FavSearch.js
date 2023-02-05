const { model, Schema } = require('mongoose')

const favourite = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  pageId: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  _id: false,
  __v: false
})

const Favourite = model('Favourite', favourite)

const create = async (data) => {
  const newFav = new Favourite(data)

  return await newFav.save()
}

const find = async (data) => {
  return await Favourite.find(data)
}

const deleteOne = async (pageId) => {
  return await Favourite.deleteOne(pageId)
}

module.exports = { create, find, deleteOne }
