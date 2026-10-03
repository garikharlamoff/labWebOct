function encodeToRot13(str) {
  let originalLower = 'abcdefghijklmnopqrstuvwxyz';
  let rotatedLower  = 'nopqrstuvwxyzabcdefghijklm';
  
  let originalUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rotatedUpper  = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (originalLower.indexOf(char) !== -1) {
      let index = originalLower.indexOf(char);
      result = result + rotatedLower[index];
    } else if (originalUpper.indexOf(char) !== -1) {
      let index = originalUpper.indexOf(char);
      result = result + rotatedUpper[index];
    } else {
      result = result + char;
    }
  }
  
  return result;
}

console.log(encodeToRot13('hello'));
console.log(encodeToRot13('Why did the chicken cross the road?'));
