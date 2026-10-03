function removeLastOccurrences(str, value) {
  let index = str.lastIndexOf(value);
  
  if (index === -1) {
    return str;
  }
  
  let before = str.slice(0, index);
  let after = str.slice(index + value.length);
  
  return before + after;
}

console.log(removeLastOccurrences('To be or not to be', 'be'));
console.log(removeLastOccurrences('ABABAB', 'BA'));
