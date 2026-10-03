function invertCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char === char.toUpperCase()) {
      result = result + char.toLowerCase();
    } else {
      result = result + char.toUpperCase();
    }
  }
  
  return result;
}

console.log(invertCase('Hello, World!'));
console.log(invertCase('JavaScript is Fun'));
