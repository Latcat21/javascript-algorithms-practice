///////// Add Two numbers /////////////////////////

function addTwo(num1, num2){
  return num1 + num2;
}
// console.log(addTwo(2, 4))

///////// Celsiut to Fahrenheit /////////////////////////

function tempConvert(cel){
  let temp = cel * (9 / 5) + 32;
  return temp
}
console.log(tempConvert(30))