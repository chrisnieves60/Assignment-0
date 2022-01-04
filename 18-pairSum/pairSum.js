function pairSum(nums, target) {
  // Insert code here;
  
let i=0;  
let result=false; 
  for (let p=0; p<nums.length-1; p++)
  {
    for (let j = p+1; j < nums.length-1; j++) //for loop until end of array.
    {
      if (nums[p]+nums[j]==target)
      {
        result=true; 
      }
    }
  }
  return result; 
}
console.log(pairSum([8, 8, 6, 4, 9, 4, 6], 8)); 

// Do not edit this line;
module.exports = pairSum;