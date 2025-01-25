function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }

  //Check if the inputs are numbers before adding
  a = Number(a);
  b = Number(b);

  if(isNaN(a) || isNaN(b)){
    return 'Invalid input. Please provide numbers';
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(1, '2')); // 3
console.log(foo('1', 2)); // 3
console.log(foo('a',2)); // Invalid input. Please provide numbers