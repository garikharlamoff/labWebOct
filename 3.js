function concatenateStrings(value1, value2) {
  let str1 = value1;
  let str2 = value2;

  if (!str1) str1 = '';
  if (!str2) str2 = '';

  return str1 + str2;
}

console.log(concatenateStrings('aa', 'bb'));
console.log(concatenateStrings('aa', ''));
