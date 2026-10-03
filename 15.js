function reverseString(str) {
  let reversed = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  
  return reversed;
}

console.log(reverseString('abcdef'));
console.log(reverseString('12345'));
