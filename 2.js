function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (value instanceof String) {
    return true;
  }
  return false;
}

console.log(isString('test'));
console.log(isString([]));
console.log(isString(null));
