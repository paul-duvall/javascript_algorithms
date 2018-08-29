// Copies the elements of one array (arr1) into a second array (array 2) in order from a given starting index (n).

function frankenSplice(arr1, arr2, n) {
  
  // New array created to protect integrity of arr2
  let newArray = arr2.slice();

  for(i = 0; i<arr1.length; i++) {
    // Isolate each element to be transferred across
    let elementToTransfer = arr1[i];
    // Insert the selected element into the new array
    newArray.splice(n+i, 0, elementToTransfer);    
  }
  console.log(newArray);
  return newArray;
}

frankenSplice([1, 2], ["a", "b"], 1);