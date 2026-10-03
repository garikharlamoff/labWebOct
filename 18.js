function countVowels(str) {
  let vowels = 'aeiouyAEIOUY';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1;
    }
  }
  
  return count;
}

console.log(countVowels('apple'));
console.log(countVowels('banana'));
