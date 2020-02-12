function confirmEnding(str, target) {
  return str.substr(-target.length) === target
  }

  
  confirmEnding("Bastian", "n");

   //if str ends with target return true else return false
  //first we have to split the string
  //then we see if target matches the ending of str
  //compare target length with end of str


    // str.split("", target.length)
  // if(str.includes(target, str[-target.length])) {
  //   return true
  //  if(target===str[-1]){
  //     return false
  //   }
  // }else return false
  // }