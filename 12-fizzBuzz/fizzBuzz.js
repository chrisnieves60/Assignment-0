function fizzBuzz(start, end) {
  // Insert code here;
let string1="fizz"; 
for (let num = start;num<=end; num++)
{
  if(num%3==0)
  {
     if (num%3==0 && num%5==0)
     {
      console.log("fizbuzz");
     }
     else 
     {
       console.log("fizz");
     }
  }
  else if(num%5==0)
  {
      console.log("buzz"); 
  }
  else 
  console.log(num); 
  }
}
   (fizzBuzz(1, 15)); 
// Do not edit this line;
module.exports = fizzBuzz;