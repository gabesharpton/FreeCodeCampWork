function findLongestWordLength(str) {
    //first split the string into array of words.
    //then loop through array and get the length of each word in array.
    //return largest value
    let split = str.split(" ")
    let longest = Math.max(...(split.map(el => el.length)));
    console.log(longest)
      return longest;
    }
    
    findLongestWordLength("The quick brown fox jumped over the lazy dog");