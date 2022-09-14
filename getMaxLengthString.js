const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longest = 0;
  let longestString = []
  if(arrayOfString === undefined || arrayOfString === null ){
    return undefined;
  }
  for (let i = 0; i < arrayOfString.length; i++){
    if(arrayOfString[i].length > length) {
      longest = arrayOfString[i].length; 
     }
    }
    for (let i = 0; i < arrayOfString.length; i++){
      if(arrayOfString[i].length === length) {
        longestString.push(arrayOfString[i]);
      }
    }  
    return longestString;
  }





module.exports = getMaxLengthString
