function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let cleanStr = '';
  
  let allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < lowerStr.length; i++) {
    if (allowedChars.indexOf(lowerStr[i]) !== -1) {
      cleanStr = cleanStr + lowerStr[i];
    }
  }

  let reversedStr = '';
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + cleanStr[i];
  }
  
  return cleanStr === reversedStr;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('No lemon, no melon'));
