~(function(global){

var info = global.tbrand.info.en

// Title & Favicon
void function() {
  document.title = info.name + ' Brand Examples'

  var favicon = document.createElement('link')
  favicon.type = 'image/x-icon'
  favicon.rel = 'shortcut icon'
  favicon.href = global.tbrand.icons.faviconSquare
  document.getElementsByTagName('head')[0].appendChild(favicon)
}()

// Logo
imageGenerator(
  'logo',
  global.tbrand.logos.regular,
  document.querySelector('.col-main')
)

// Avatar
imageGenerator(
  'avatar',
  global.tbrand.icons.round,
  document.querySelector('.sidebar-top')
)

// Icon
imageGenerator(
  'icon',
  global.tbrand.icons.regular,
  document.querySelector('.sidebar-bottom')
)

// Info Table
void function() {
  var infoTable = document.createElement('div')
  infoTable.id = 'infoTableWrap'
  infoTable.className = 'info-table-wrap'
  var tableHTML = ConvertJsonToTable([info], 'infoTable', null, 'Official Website')
  infoTable.innerHTML = tableHTML
  document.body.appendChild(infoTable)
}()

// Functions & Utils
function imageGenerator (name, url, $wrapper, className) {
  if ($wrapper === undefined) $wrapper = document.body
  if (className === undefined) className = ''
  var image = document.createElement('IMG')
  image.id = name
  image.src = url
  image.className = className
  $wrapper.appendChild(image)
  return image
}

// TODO: Complete all examples

})(window)
