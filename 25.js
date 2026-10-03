function unbracketTag(str) {
  let result = str.slice(1, str.length - 1);
  return result;
}

console.log(unbracketTag('<div>'));
console.log(unbracketTag('<span>'));
