function formatTime(minutes, seconds) {
  let min = minutes;
  let sec = seconds;
  
  if (minutes < 10) {
    min = '0' + minutes;
  }
  
  if (seconds < 10) {
    sec = '0' + seconds;
  }
  
  return min + ':' + sec;
}

console.log(formatTime(5, 30));
console.log(formatTime(0, 0));
