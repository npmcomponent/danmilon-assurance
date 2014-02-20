// if we run in the browser, load some shims
// if not, supress the error and move on
try {
  require('danmilon-object.keys-shim')
  Array.isArray = Array.isArray || require('yields-isarray')
} catch (ex) {
  
}
