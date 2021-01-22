function revArr(arr){
    let rev = [];
    function reverse(arr){
      if (arr.length !== 0){
        rev.push(arr.pop());
        reverse(arr);
      }
    }
    reverse(arr);
    return rev;
  }

console.log(revArr(["h","e","l","l","o"]))