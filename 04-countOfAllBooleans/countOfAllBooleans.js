function countOfAllBooleans(arr) {
  // Insert code here;
  let count=0; 
  for (let p=0; p<arr.length; p++)
  {
    if(arr[p]==true)
    {
      count++; 
    }
    else if(arr[p]==false)
    {
      count++; 
    }
  }
  
  return count; 
}

console.log(countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))


// Do not edit this line;
module.exports = countOfAllBooleans;