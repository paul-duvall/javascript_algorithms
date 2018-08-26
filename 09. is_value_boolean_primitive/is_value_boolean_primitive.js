// Checks if a value is classified as a boolean primitive

function booWho(bool) {
  
  if(typeof bool === "boolean") {
    return true;
  } 
  return false;
}

booWho("test");