function removeFirstOccurrences(str, value) {
  let index = str.indexOf(value);
  
  if (index === -1) {
    return str;
  }
  
  let before = str.slice(0, index);
  let after = str.slice(index + value.length);
  
  return before + after;
}

console.log(removeFirstOccurrences('To be or not to be', 'be'));
console.log(removeFirstOccurrences('ABABAB', 'BA'));
