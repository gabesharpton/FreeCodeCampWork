//Given a string with multiple words, uppercase the first letter in word and lowercase the rest.
function titleCase(str) {

    String.prototype.capitalize = function(){
           return this.replace( /(^|\s)([a-z])/g , x => x.toUpperCase() );
          };
    console.log(str.toLowerCase().capitalize())
    
      return str.toLowerCase().capitalize();
    }
    
    titleCase("I'm a little tea pot");
    
    //split string into array by spaces
    //then capitalize first letter of each new array
    //lowercase the rest of the array
    //join back to string.