/*
  Algorithms from Dylan Israels 100 alogrithm course on Udemy
*/


/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

**Example**
For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

function sumOfTwo(a, b, v){

  const hashMap = {}

  for(let num of a){
    const difference = v - num;
    hashMap[difference] = difference;
  }
  for(let num of b){
    if(hashMap.hasOwnProperty(num)){
      return true;
    }
  }

  return false;

 }

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

**Example**
-   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) returns [27, 5, 39, 1001];

*/

  function largestOfFour(nums){

    const highestNumber = [];

    for(let numberGroup of nums){
      let largest = 0;
      for(let number of numberGroup){
        largest = largest < number ? number : largest;
      }
      highestNumber.push(largest)
    }

    return highestNumber;

  }
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));