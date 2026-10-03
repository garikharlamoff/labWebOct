function getStringLength(value) {
  if (typeof value !== 'string') {
    return 0;
  }
  return value.length;
}

console.log(getStringLength('aaaaa'));
console.log(getStringLength('b'));
console.log(getStringLength(''));
