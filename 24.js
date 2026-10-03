function extractNameFromTemplate(value) {
  let name = value.slice(7, value.length - 1);
  return name;
}

console.log(extractNameFromTemplate('Hello, John Doe!'));
console.log(extractNameFromTemplate('Hello, Chuck Norris!'));
