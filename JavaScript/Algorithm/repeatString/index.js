function repeatStringNumTimes(str, num) {
    // repeat after me
  return num > 0 ? str + repeatStringNumTimes(str, num - 1): ""
  }
  repeatStringNumTimes("abc", 3);
  
  //if num is greater than 0
  //return str plus function using recursion
  //or return ""