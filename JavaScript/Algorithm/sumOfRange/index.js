function sumAll(arr) {
    let a = arr[0];
    let b = arr[1];
    let newArr = []
    if(a < b){
        for(let i = a; i <= b; i++){
            newArr.push(i)
        }
    }else{
       for(let i = b; i <= a; i++){
            newArr.push(i)
        }
    }
        let len = newArr.length+1
     let finalArr = newArr[0] + newArr[1] + newArr[2] + newArr[3]
    
    console.log(len)
    
  
    return finalArr;
  }
  
  console.log(sumAll([10, 5]));