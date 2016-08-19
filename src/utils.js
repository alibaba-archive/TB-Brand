export const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
}

// REF: https://github.com/jonschlinkert/mixin-deep
export const mixinDeep = (target, ...objects) => {
  for (let object of objects) {
    if (!isObject(object)) continue
    for (let key in object) {
      const obj = target[key]
      const val = object[key]
      if (isObject(val) && isObject(obj)) {
        mixinDeep(obj, val)
      } else {
        target[key] = val
      }
    }
  }
  return target
}
