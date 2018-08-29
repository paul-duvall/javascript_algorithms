function titleCase(str) {
  
  let capitalisedWords = [];
  let strArray = str.toLowerCase().split(" ");

  for (let i = 0; i<strArray.length; i++) {
    capitalisedWords.push(strArray[i][0].toUpperCase() + strArray[i].slice(1));
  }
  console.log(capitalisedWords.join(" "));
  return capitalisedWords.join(" ");
}

titleCase("monkeys like bananas");