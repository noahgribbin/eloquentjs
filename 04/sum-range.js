// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, step){
  let returnArr = [];
    if(start<end){
        for(let i=start; i <= end; i += step || 1){
            returnArr.push(i)
        }
    }else{
        for(let i=start; i >= end; i += step){
            returnArr.push(i)
        }
    }
  return returnArr
}

function sum(arr){
    let count = 0;
    while(arr.length){
        count += arr.shift()
    }
  return count;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
