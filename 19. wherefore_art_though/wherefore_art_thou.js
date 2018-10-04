// Looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).

function whatIsInAName(collection, source) {
  // declare variable for resultant array
  var arr = [];
  
  // Filter through each object in the array (collection)
  arr = collection.filter(function(currentEl){
    // Iterate over the properties of source
    for(let i in source){
      // Check if the current property of source is not equal to the current property of currentEl in collection
      if(source[i] != currentEl[i]) {
        return false;
      }
    }
    return true;
  });
  
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });