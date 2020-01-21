// function diffArray(arr1, arr2) {
//     var newArr = [];
//     if(arr1 !== arr2){

//     }else return arr2
//     // Same, same; but different.
//     return newArr;
//   }
  

function diff(a, b) {
    var u = a.slice(); //dup the array
    b.map(e => {
      if (u.indexOf(e) > -1) delete u[u.indexOf(e)]
      else u.push(e)   //add non existing item to temp array
    })
    return u.filter((x) => {return (x != null)}) //flatten result
  }

  console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  