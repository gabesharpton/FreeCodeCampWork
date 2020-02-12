let inputString = "abcyzaazft"
function changeString(inputString) {
 
  let charCodes = [];
  for(let i =0; i < inputString.length; i++){
    charCodes.push(inputString.charCodeAt(i)+1)
  }
  const z =  charCodes.findIndex(el => el == 123);

    function test(num) {
        if(num == 123){
                        return 97
                    }
        return num
    }


 var newChars = charCodes.map(test)
  
  let neww = String.fromCharCode.apply(null, newChars)
  return neww
  }
   
console.log(changeString(inputString))


//split input to array of letters
//getting charcode from letters
//then add 1 to the charcode
//then check if charcode is equal to z
//then convert that to a
//for each z there is, change from 123 to 97