// A function that splits an array (first argument) into groups the length of size (second argument) and returns a two dimensional array

function chunkArrayInGroups(arr, size) {
  let finalArr = [];
  let currentArr;
  // Declare counter for iteration
  let counter = Math.ceil(arr.length / size);
  
  // Repeat action number of times equal to number of arrays expected in finalArr
  for(let i = 0; i < counter; i++) {
   
    if(arr.length <= size) {
      // Add remaining array elements to finalArr
      finalArr = finalArr.concat([arr]);
    } else {
      // Add an array of length equal to size to the finalArr
      currentArr = arr.splice(0, size);
      finalArr = finalArr.concat([currentArr]);
    }
  } 
  console.log(finalArr);
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
