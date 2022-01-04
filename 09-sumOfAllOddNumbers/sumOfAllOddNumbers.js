function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let count=0; 
  for (let p=0; p<nums.length; p++)
  {
    if (nums[p] % 2!=0)
    {
      count++; 
    }
  }
  return count; 
}

console.log(sumOfAllOddNumbers([0,1,2,3,4,5,6,7])); 
// Do not edit this line;
module.exports = sumOfAllOddNumbers;