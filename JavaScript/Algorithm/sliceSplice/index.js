function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
  
  let g = arr2.slice()
  console.log(g)
  g.splice(n, 0, arr1);
    return g.flat()
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
  
  
  //return 2nd array
  //slice the first array into second array from n index
  //cant change original arrays
  //flatten array