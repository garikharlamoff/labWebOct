function containsSubstring(str, substring) {
  let position = str.indexOf(substring);
  
  if (position !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(containsSubstring('Hello, World!', 'World'));
console.log(containsSubstring('JavaScript is Fun', 'Python'));
