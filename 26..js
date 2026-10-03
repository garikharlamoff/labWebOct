function extractEmails(str) {
  let emailsArray = str.split(';');
  return emailsArray;
}

console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com'));
console.log(extractEmails('info@gmail.com'));
