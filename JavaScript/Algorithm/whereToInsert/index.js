
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    //push num to array
    //then sort and find index of num
    //if num is already a number in arr, sort then push?
      arr.unshift(num)
      arr.sort((a,b) => a-b)
    return arr.indexOf(num)
  }
  //the problem is when num is a number in arr already it puts num behind the original arr number
  
  
  getIndexToIns([10, 20, 30, 40, 50], 35)
  getIndexToIns([10, 20, 30, 40, 50], 30)
  getIndexToIns([ 40, 60], 50);
  getIndexToIns([3, 10, 5], 3)
  getIndexToIns([2, 5, 10], 15)