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


// solution 2
function largestWord(str){
  let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
  let largest = '';

  filteredArray.forEach((word) =>{
    largest = word.length > largest.length ? word : largest;
  })

  return largest
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


////////////////  VALID TIME ///////////////////

function validTime(str){
  let newArr = str.split(':');
  let firstHalf = parseInt(newArr.slice(0,1))
  let secondHalf = parseInt(newArr.slice(1));

  if(firstHalf < 24 && firstHalf > 0 && secondHalf < 59 && secondHalf >= 0){
    return true
  }else{
    return false
  }
}

//// solution 2

function isValidTime(time){
  let timeArray = time.split(':');
  
  if(Number(timeArray[0]) > 23){
    return false;
  }else if(Number(timeArray[1]) > 59){
    return true
  }

  return true;
}

//////// missing number in array

function missingNum(arr){
  const numberArray = arr.sort((num1, num2) => {
    return num1 - num2;
  });
  
  for( let i = 0; i < numberArray.length; i++){
    if(i !== numberArray[i]){
      return i
    }
  }
 
}

///////// is there a duplicate in an array
function isDuplicated(arr){
  let sorted = arr.sort((a, b) => {
    return a - b;
  })

  for(let i = 0; i < arr.length; i++){
    if( arr[i] === arr[i + 1]){
      return true
    }else{
      return false
    }
  }

}

///////// digit sum ('2 apples, 12 oranges') === 14

function digitSum(str){
  const nums = str.match(/\d+/g);

  let newStr = nums.join('+');

  return eval(newStr)

}

// solution 2
function sumDigits(str){
  const nums = str.match(/\d+/g) || [];

  let sum = 0;

  nums.forEach((num) => {
    sum += parseInt(num);
  })

 return sum
}


///////////first set of duplicates [2,3,3,1,5,2] = 3

function firstDuplicate(arr){
  let final = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i + 1]){
       final.push(arr[i])
      }
    }

    if(final[0]){
      return final[0]
    }else{
      return -1;
    }
  
}


///// solution 2
function firstDuplicate2(numArray){
  let duplicateObject = {};

  for (let num of numArray){
    if(duplicateObject.hasOwnProperty(num)){
      return num
    }
    duplicateObject[num] = num;
  }

  return -1;
  
}

///////// no space string converter CodingGodDoesWorkSon = coding god does work son

function stringSpacer(str){
  let stringArray = str.split('');
  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i] !== stringArray[i].toLowerCase()){
      stringArray[i] = stringArray[i].toLowerCase();
      stringArray.splice(i, 0, ' ');
    }
  }

  return stringArray.join('').trim('')
}
console.log(stringSpacer('CodingGodDoesWorkSon'))