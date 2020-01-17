let arr = [1, 2, 3, 4, 5, 4, 6, 5, 6, 6, 2];

let getDoubles = (value, index, arr) => {
    return arr.indexOf(value) !== index
}
let doubles = arr.filter( getDoubles )
let dd = doubles.reduce((a,v,i, aa) => {
    if( aa.indexOf(v) !== i && a.indexOf(v) < 0)
    return a
})

console.log(doubles);
console.log(dd);
console.log(arr)

var uniqueItems = [...new Set(arr)]
console.log(uniqueItems)

let duplicates = arr.reduce((a , val, i , arr) => {
    if(arr.indexOf(val) !== i && a.indexOf(val) < 0){
    a.push(val)}
    return a.sort();
}, [])
console.log(duplicates)