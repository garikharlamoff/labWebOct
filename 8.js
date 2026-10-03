function repeatString(str, times) {
  let result = '';
  
  if (times <= 0) {
    return result;
  }
  
  for (let i = 0; i < times; i++) {
    result = result + str;
  }
  
  return result;
}

console.log(repeatString('A', 5));
console.log(repeatString('cat', 3));
