function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count=0; 
  for (let p=0; p<arr.length; p++) //go through whole array 
  {
    if(arr[p]==true)
    {
      count++; 
    }
    else if(arr[p]==false)
    {
      count++; 
    }
    else if(typeof arr[p]=="string") //typeof returns type of element
    {
      count++; 
    }
    
  }
  return count; 
}

  console.log(countOfAllBooleansAndStrings(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))
  
  


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;