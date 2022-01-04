function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count=0; 
for (let p=0; p<nums.length; p++)
{
  if (nums[p]<target)
  {
    count++; 
  }
}
return count; 
}

console.log(countOfAllNumbersSmallerThanTarget([3, 45, 67, 21, 2, 4, 5, 77, 8, 9, 0], 20))

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;