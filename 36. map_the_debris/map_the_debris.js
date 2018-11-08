// ******************** MAP THE DEBRIS *******************
// Returns a new array that transforms the element' average altitude into their orbital periods (in seconds).

function orbitalPeriod(arr) {
  // GM Value of the earth
  var GM = 398600.4418;
  // Radius of the earth
  var earthRadius = 6367.4447;
  // PI * 2, necessary for the calculation
  const a = Math.PI * 2;
  // Blank array for result
  let periodsArr = [];

  // Function to calculate orbital period
  function calculatePeriod(obj) {
    // Earth's radius + average altitude to the power of 3
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    // c divided by GM value
    var b = Math.sqrt(c / GM);
    // a * b rounded to nearest whole number
    var orbPeriod = Math.round(a * b);
    console.log(orbPeriod);
    // Remove average altitude of current item
    delete obj.avgAlt;
    // Add in orbital period for current item
    obj.orbitalPeriod = orbPeriod;
    return obj;
  }

  // Loop through each item in the array, running calculatePeriod function
  for (var elem in arr) {
    periodsArr.push(calculatePeriod(arr[elem]));
  }
  
  console.log(periodsArr);
  return periodsArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);