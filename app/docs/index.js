const basicInfo = require('./basicInfo')
const servers = require('./servers')
const schemas = require('./schemas')
const tags = require('./tags')
const paths = require('./paths')

module.exports = {
  ...basicInfo,
  ...servers,
  ...schemas,
  ...tags,
  ...paths
}
