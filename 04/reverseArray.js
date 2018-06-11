// Your code here.
function reverseArray(arr){
	let newArr = [];
  	for(i=arr.length - 1; i>=length; i--){
      newArr.push(arr[i])
    }
	return newArr
};
function reverseArrayInPlace(arr){
	let temp
	let length = arr.length;
  	let middle = Math.floor(length/2);
    for(let i = 0; i < middle; i++){
    	let temp = arr[i];
      	arr[i] = arr[length-1-i];
      	arr[length-1-i] = temp;
    }
  return arr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
