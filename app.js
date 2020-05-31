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
      console.log('fizzbuzz')
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

// console.log(fizzBuzz())

///////// Factorialize a number /////////////////////////

// solution 1
function factorialize(num){
  
  if( num === 0 ){
    return 1
  }

  let sum = [];

  for( let i = 1 ; i <= num ; i++ ){
    sum.push(i)
  }

  let final = sum.reduce((a,b) => {
    return a * b;
  })

  return final;
}

// solution 2 ///

function factorializeNumber(num){
  let product = 1;

  for(let i = 1; i <= num ; i++){
    product *= i
  }
  return product;
}

///////// Reverse a string /////////////////////////

//solution 1
function revString(str){
  return str.split('').reverse().join('')
}

// solution 2
function reverseString(str){
  let newStr = ''
  for(let i = str.length - 1; i >= 0 ; i--){
    newStr += str[i]
  }
  return newStr;
}


////////////////  palindrome /////////////
function isPalindrome(str){
   let forwardStr = str.toLowerCase();
   let reversedStr;

   forwardStr = forwardStr.replace(/[\W_]/g, '');
   reversedStr = forwardStr.split('').reverse().join('');



   return forwardStr === reversedStr;
}
console.log(isPalindrome('hi my name is brian '))