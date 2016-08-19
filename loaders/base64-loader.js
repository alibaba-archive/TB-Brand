/**
 * REF: https://github.com/nicksrandall/base64-font-loader
 */

const loaderUtils = require('loader-utils')

const dictionary = {
  'png': 'image/png',
  'svg': 'image/svg+xml'
}

module.exports = function(content) {
  this.cacheable && this.cacheable()
  var query = loaderUtils.parseQuery(this.query)
  var ext = loaderUtils.interpolateName(this, "[ext]", {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  }).toLowerCase()
  if (!dictionary.hasOwnProperty(ext)) {
    throw new Error(ext + ' font type is not supported')
  }
  var url = 'data:' + dictionary[ext] + ';base64,'
  url += content.toString('base64')
  return 'module.exports = ' + JSON.stringify(url)
}

module.exports.raw = true
