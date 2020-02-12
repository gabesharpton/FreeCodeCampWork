function largestOfFour(arr) {

    //Loop through array 4 times
    //if I sort each sub array from high to low, I can pop the first value of that subarray into a results array.
    
      for(var i = 0; i < arr.length; i++){
        arr[i].sort(function(a,b){return b-a}).splice(1,arr.length)
        
      }
      var flattenedResults = arr.flat()
       console.log(flattenedResults)
      
      return flattenedResults;
    }
    
    
    
    
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    
    
    
    //-------Inital thoughts----
    //loop through array of arrays
      //find the largest number in subarray
      //add largest number new array with other largest numbers