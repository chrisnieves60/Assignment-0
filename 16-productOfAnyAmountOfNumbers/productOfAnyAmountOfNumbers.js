function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product=1; 
  for(let p=0; p<args.length; p++)
  {
    product = product*args[p]; 
  }
  return product; 
}
console.log(productOfAnyAmountOfNumbers(3, 4, 5)); 

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;