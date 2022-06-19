// ToDo: WRite code ot create a function that accepts an array of numbers
// return "true is no number appears in the array more than once, else turn false
// Essentially looking for duplicates 

var isUnique = function(arr) {
    let arrObj = {};
    
    for(let i = 0; i < arr.length; i++) {
     if (arr[i] in arrObj) {
         arrObj[arr[i]] = false
         return false;
     }
     arrObj[arr[i]] - true;
    }
    return true;
    console.log(arrObj);
 };