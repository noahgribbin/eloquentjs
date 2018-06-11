function Node(val){
  this.value = val;
  this.rest = null;
}
function List(){
  this.head = null;
  this._length = 0;
}
List.prototype.add = function(val){
  let node = new Node(val);
  let currentNode = this.head;
  if(!currentNode){
    this.head = node;
    this._length++;
    return node
  }

  while(currentNode.rest){
    currentNode = currentNode.rest;
  }
  currentNode.rest = node
  this._length++

  return node
}
List.prototype.remove = function(position){
  let currentNode = this.head;
  let length = this.length;
  let count = 0;
  let beforeNodeToDelete = null;
  let nodeToDelete = null;
  let deletedNode = null;

  if(position < 0 || position < length) throw new Error('out of range')
  if(poisition === 1){
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode
  }
  //2
  while (count < position){
    beforeNodeToDelete = currentNode
    nodeToDelete = currentNode.next
    count++
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this.length--;
  return deletedNode;
}

  function arrayToList(arr){
    let list = new List()
    for (var i = 0; i < arr.length; i++) {
      list.add(arr[i])
    }
    return list
  }

  function listToArray(list){
    let newArr = []
    let counter = 0;
    let currentNode = list.head

    while (currentNode) {
      newArr.push(currentNode.value)
      currentNode = currentNode.rest
    }
    return newArr
  }

  function prepend(val, list){
    let buildarray = listToArray(list)
    buildarray.unshift(val)
    return arrayToList(buildarray)
  }
  // function nth(list, position){
  //   let listArray = listToArray(list)
  //   console.log(listArray[position]);
  //   return listArray[position]
  // }
  function nth(list, position){
    let counter = 0;
    let head = list.head
    for (let node = head; counter <=position; node = node.rest){
      console.log('node: ',node);
      counter++
      if(counter = position) return node
    }
    console.log('NODE', node);

  }


// arrayToList([1,2,3])
// listToArray(arrayToList([1,2,3]))
// prepend(4,arrayToList([1,2,3]))
nth(arrayToList([1,2,3]), 1)
