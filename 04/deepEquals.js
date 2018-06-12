function deepEquals(obj1, obj2){
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();
  // check key length matches
  if(obj1Keys.length !== obj2Keys.length) return false
  // check properties
  for (var i = 0; i < obj1Keys.length; i++) {
    if(!obj1Keys == obj2Keys[i]) return false
    if(!obj1Keys.includes(obj2Keys[i])) return false
  }
  // check values
  for (var i = 0; i < obj1Keys.length; i++) {
    if(obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) return false
  }
  return true
}

let one = {name:'noah', age:20};
let one1 = {name:'noah', age:20};
let two = {age:20, name:'noah'};
let three = {name:'Boah', age:22};
let four = {name:'Boah', age:22, other:true};

console.log(deepEquals(one,two))
