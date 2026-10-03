
function orderAlphabetically(str) {
  let letterArr = str.split('');
  let sortedArr = letterArr.sort();
  let result = sortedArr.join('');
  
  return result;
}

console.log(orderAlphabetically('webmaster'));
console.log(orderAlphabetically('abc123xyz'));
