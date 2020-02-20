/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  
    let finishedArr = []
    while(arr.length){
      finishedArr.push(arr.splice(0, size))
    }
      return finishedArr;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)