function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count=0; 
  for (let p=0; p<nums.length; p++)
  {
    if (nums[p]==p)
    {
      count++; 
    }
  }
  return count; 
}

console.log(countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77])); 

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;