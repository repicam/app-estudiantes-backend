const { model, Schema } = require('mongoose')

const searchSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true })

searchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
    delete returnedObject.createdAt
    delete returnedObject.updatedAt
    delete returnedObject._id
  }
})

const Search = model('Search', searchSchema)

const create = async (newSearchData) => {
  const newSearch = new Search(newSearchData)

  const search = await newSearch.save()
  return search
}

module.exports = { create }
