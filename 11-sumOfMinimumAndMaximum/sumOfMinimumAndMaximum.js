function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let sum=0;  
  let min=nums[0]; 
  let max=nums[0]; 
  for (let p=0; p<nums.length; p++)
  {
    if (nums[p]>max)
    {
      max=nums[p]; 
    }
    if(nums[p]<min)
    {
      min=nums[p]; 
    }
  }
  sum = min + max; 
  return sum; 
}

console.log(sumOfMinimumAndMaximum([4, 3, 2, 45, 6, 78, 65, 4, 3])); 

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;