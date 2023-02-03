const cloudinary = require('cloudinary').v2
const fs = require('fs-extra')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true
})

const uploadImage = async (folder, filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder
  })
}

const deleteTempImage = async (filePath) => {
  await fs.unlink(filePath)
}

const deleteImageCloud = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}

module.exports = { uploadImage, deleteTempImage, deleteImageCloud }
