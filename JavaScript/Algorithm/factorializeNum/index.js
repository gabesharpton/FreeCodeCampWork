function factorialize(num) {
    for(var i = 1; num > 0; num--){
      i *= num;
    }
        return i;
    }
    
      //if number is 0, return 1
      //else loop from 1 through num and get every number between, then add to an array
      //then split the numbers
      //then multiply all the numbers together
    
    console.log(factorialize(5));