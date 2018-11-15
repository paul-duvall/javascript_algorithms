// ******************** CASH REGISTER *******************
// Accept purchase price as first argument (price), payment as the second argument (cash) and cash-in-drawer as the third argument (cid).
// Returns an object with a status key (OPEN, CLOSED or INSUFFICIENT FUNDS) and a change key, containing an array of the change given.
// Returns INSUFFICIENT_FUNDS if the cash-in-drawer is less than the change due
// Returns CLOSED if the value of the change is equal to the change due
// RETURNS OPEN if change is given and cash remains in the drawer

function checkCashRegister(price, cash, cid) {
  // Declare a variable for the change with two keys; status (set to open) and change (set to empty string)
  let change = {status: "OPEN", change: []};
  // Declare a variable for total amount of change available
  let totalChange = Math.floor((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) * 100) / 100;
  // Declare a variable for the change needed
  let requiredChange = cash - price;

  if(totalChange < requiredChange){
    // If the total change available is less than the price, return the change object with a status of "INSUFFICIENT_FUNDS" 
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  } else if(totalChange === requiredChange) {
    // If the total change available is exactly equal to the required change, return the change object with a status of "CLOSED" and a change key containing the original cid array
    change.status = "CLOSED";
    change.change = cid;
    return change;
  }
  else {
    change.change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["HUNDRED", 0] ];
  }
  
  // Checks to see if the requiredChange is greater than 100 and that there are 100 dollar bills in the drawer
  while(requiredChange >= 100 && cid[8][1] >= 100){
    // Subtracts 100 dollars from requiredChange
    requiredChange = requiredChange - 100;
    // Removes a hundred dollar bill from the drawer
    cid[8][1] = cid[8][1] - 100;
    // Records that 100 dollars has been given to customer in change.change
    change.change[8][1] = change.change[8][1] + 100;
  }
  while(requiredChange >= 20 && cid[7][1] >= 20){
    requiredChange = requiredChange - 20;
    cid[7][1] = cid[7][1] - 20;
    change.change[7][1] = change.change[7][1] + 20;
  }
  while(requiredChange >= 10 && cid[6][1] >= 10){
    requiredChange = requiredChange - 10;
    cid[6][1] = cid[6][1] - 10;
    change.change[6][1] = change.change[6][1] + 10;
  }
  while(requiredChange >= 5 && cid[5][1] >= 5){
    requiredChange = requiredChange - 5;
    cid[5][1] = cid[5][1] - 5;
    change.change[5][1] = change.change[5][1] + 5;
  }
  while(requiredChange >= 1 && cid[4][1] >= 1){
    requiredChange = requiredChange - 1;
    cid[4][1] = cid[4][1] - 1;
    change.change[4][1] = change.change[4][1] + 1;
  }
  while(requiredChange >= 0.25 && cid[3][1] >= 0.25){
    requiredChange = requiredChange - 0.25;
    cid[3][1] = cid[3][1] - 0.25;
    change.change[3][1] = change.change[3][1] + 0.25;
  }
  while(requiredChange >= 0.1 && cid[2][1] >= 0.1){
    requiredChange = requiredChange - 0.1;
    cid[2][1] = cid[2][1] - 0.1;
    change.change[2][1] = change.change[2][1] + 0.1;
  }
  while(requiredChange >= 0.05 && cid[1][1] >= 0.05){
    requiredChange = requiredChange - 0.05;
    cid[1][1] = cid[1][1] - 0.05;
    change.change[1][1] = change.change[1][1] + 0.05;
  }
  // NB changed to requiredChange > 0 in order to fix last cent issue
  while(requiredChange > 0 && cid[0][1] >= 0.01){
    requiredChange = requiredChange - 0.01;
    
    if(requiredChange < 0.01 && requiredChange > 0){
      Math.floor((requiredChange * 100) / 100);
    }

    cid[0][1] = cid[0][1] - 0.01;
    change.change[0][1] = change.change[0][1] + 0.01;
  }

  // Checks to see if the cash register is empty
  if(change.change == [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) {
    // If it is, sets status to closed
    change.status = "CLOSED";

  } else if(requiredChange > 0){
    // Checks to see if there is insufficient funds to complete the transation
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  } else {
    // Otherwise, sets status to open
    change.status = "OPEN";
  }

  // Removes any values from change.change that are now at 0
  if(change.status == "OPEN" || change.status == "CLOSED"){
   for(let i = 8; i >= 0; i--){
    if(change.change[i][1] == 0){
      change.change.splice(i, 1);
    }  
  }
}

  change.change.reverse();
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}
