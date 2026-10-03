function sumOfCodes(str) {
  if (!str) {
    return 0;
  }
  
  let totalSum = 0;
  
  for (let i = 0; i < str.length; i++) {
    totalSum = totalSum + str.charCodeAt(i);
  }
  
  return totalSum;
}

console.log(sumOfCodes('My String'));
console.log(sumOfCodes('12345'));
