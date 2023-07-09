function increaseBalance(x, y) {
  x += y; // was  x = x + y
  return x;
}

function decreaseBalance(x, y) { //added missing y argument
  x -= y; // was x = x - y
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y; // was x = x / y
  return x;
  // console.log("x"); 
  /* as a return statement terminates the execution of a function 
  if user wishes to execute this command, 
  it needs to be moved before the return statement. I suppose this statement is just a mistake
  as printing "x" string does not make any sense */
}

function getRestAfterDivision(x, y) {
  x %= y; // was  x = x % y
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); /* Incorrect number of arguments:
the function is called with three arguments (3000, 2, 4000), but expects 2. 
Removed the extra argument to match the function's parameter count.*/ 
console.log(getRestAfterDivision(7000, 3)); 
