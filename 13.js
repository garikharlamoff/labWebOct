function endsWith(str, substr) {
  let endPart = str.slice(str.length - substr.length);
  
  if (endPart === substr) {
    return true;
  } else {
    return false;
  }
}

console.log(endsWith('Hello World', 'World'));
console.log(endsWith('Hello World', 'Hello'));
