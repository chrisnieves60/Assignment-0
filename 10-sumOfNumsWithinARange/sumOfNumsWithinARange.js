function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
let count=0
for(let p=0; p<nums.length; p++)
{
  if (nums[p]>=start&&nums[p]<=end)
  {
    count++; 
  }
}
return count; 
}
console.log(sumOfNumsWithinARange([2,4,5,6,23], 4, 6)); 
// Do not edit this line;
module.exports = sumOfNumsWithinARange;