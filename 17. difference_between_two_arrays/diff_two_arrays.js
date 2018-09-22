// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

function diffArray(arr1, arr2) {
  var newArr = [];
  // Create an array containing the contents of arr1 and arr2
  let combinedArr = arr1.concat(arr2);
  // Filter through the combined array, returning an array of all the items not included in both arr1 and arr2
  newArr = combinedArr.filter(function(element){
    return !(arr1.includes(element) & arr2.includes(element));
  });
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);