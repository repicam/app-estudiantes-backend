const fileUpload = require('express-fileupload')

const uploadTempFile = fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
})

module.exports = uploadTempFile
