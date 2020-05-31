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
   let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
   let reversedStr = forwardStr.split('').reverse().join('');

  return forwardStr === reversedStr;
}

////////////// Longest Word /////////////
function longestWord(str){
  let wordArr = str.split(' ');
  let count = 0;
  let final = ''
  
  for(let i = 0 ; i < wordArr.length; i++){
    if(count <= wordArr[i].length){
      count = wordArr[i].length
    }
  }
  
  wordArr.forEach((word) => {
    if(word.length === count){
      final += word
    }
  })
  

  return final
}

///////////////// repeat string //////////

function repeatStr(str, num){

  let final = ''
  
  while(num > 0){
    final += str;
    num--
  }


  return final

}
/////////////////is digit /////////
function isDigit(str){
   const digitArr = ['0', '1','2','3','4', '6','7', '8','9'];
  
   return  digitArr.includes(str);

}
