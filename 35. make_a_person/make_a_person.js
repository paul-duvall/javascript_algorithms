// ******************** MAKE A PERSON *******************
// Create an object constructor that contains a number of specified methods

var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  
  // Returns the full name passed in
  this.getFullName = function() {
    return fullName;
  };

  // Returns just the last name
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  // Returns just the first name
  this.getFirstName = function() {
    console.log(fullName.split(" ")[0]);
    return fullName.split(" ")[0];
  };

  // Sets a new first name
  this.setFirstName = function(newFirstName){
    console.log(`${newFirstName} ${fullName.split(" ")[1]}`);
    fullName = `${newFirstName} ${fullName.split(" ")[1]}`;
  }
  
  // Sets a new last name
  this.setLastName = function(newLastName){
    console.log(`${fullName.split(" ")[0]} ${newLastName}`);
    fullName = `${fullName.split(" ")[0]} ${newLastName}`;
  }

  // Sets a new full name
  this.setFullName = function(newFullName){
    fullName = newFullName;
  }

  return fullName;
};

// Declare a variable containing a new instance of the person object
var bob = new Person('Bob Ross');