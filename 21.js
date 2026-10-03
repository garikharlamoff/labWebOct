function reverseWords(str) {
  let words = str.split(' ');
  let reversedWordsArray = [];
  
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let reversedWord = '';
    
    for (let j = currentWord.length - 1; j >= 0; j--) {
      reversedWord = reversedWord + currentWord[j];
    }
    
    reversedWordsArray.push(reversedWord);
  }
  
  return reversedWordsArray.join(' ');
}

console.log(reverseWords('Hello World'));
console.log(reverseWords('The Quick Brown Fox'));
