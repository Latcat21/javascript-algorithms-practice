///////// Add Two numbers /////////////////////////

function addTwo(num1, num2){
  return num1 + num2;
}
// console.log(addTwo(2, 4)) 6

///////// Celsiut to Fahrenheit /////////////////////////

function tempConvert(cel){
  let temp = cel * (9 / 5) + 32;
  return temp
}
// console.log(tempConvert(30)) 86

///////// Fizz Buzz /////////////////////////

function fizzBuzz(){
  for(let i = 1 ; i < 101 ; i++){
   
    if( i % 15 === 0){
      console.log('fizzbuxx')
    }
    else if( i % 3 === 0){
     console.log('fizz')
    }
    else if( i % 5 === 0){
      console.log('buzz')
    }else{
    console.log(i)
    }
  }
}

console.log(fizzBuzz())