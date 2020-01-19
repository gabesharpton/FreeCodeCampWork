function sumAll(arr) {
    let a = arr[0];
    let b = arr[1];
    let numCount = Math.abs(a - b) + 1;
    let sum = ((a + b) * numCount) / 2
    return sum
}
  
  console.log(sumAll([10, 5]));