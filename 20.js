function findLongestWord(sentence) {
  let words = sentence.split(' ');
  let longest = '';
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  
  return longest;
}

console.log(findLongestWord('The quick brown fox'));
console.log(findLongestWord('A long and winding road'));
