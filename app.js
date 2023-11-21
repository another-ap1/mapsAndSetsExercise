/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns 
true or false if that array contains a duplicate*/ 

const hasDuplicate = (arr) => new Set(arr).size !== arr.length

/* vowelCount
Write a function called vowelCount which accepts a string and returns a 
map where the keys are numbers and the values are the count of the vowels in the string. */

function isVowel(v){
    return "aeiou".includes(v);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let letter of str){
      if(isVowel(letter.toLowerCase())){
        if(vowelMap.has(letter.toLowerCase())){
          vowelMap.set(letter.toLowerCase(), vowelMap.get(letter.toLowerCase()) + 1);
        } else {
          vowelMap.set(letter.toLowerCase(), 1);
        }
      }
    }
    return vowelMap;
  }