function startsWith(str, substr) {
  let startPart = str.slice(0, substr.length);
  
  if (startPart === substr) {
    return true;
  } else {
    return false;
  }
}

console.log(startsWith('Hello World', 'Hello'));
console.log(startsWith('Hello World', 'World'));
