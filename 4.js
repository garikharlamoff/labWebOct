function getFirstChar(value) {
  if (!value) {
    return '';
  }
  return value[0];
}

console.log(getFirstChar('John Doe'));
console.log(getFirstChar(''));
