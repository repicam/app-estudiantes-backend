const buildHostName = (request) => {
  return request.hotsname !== 'localhost' ? request.hotsname : request.hotsname + `:${process.env.PORT}`
}

module.exports = buildHostName
