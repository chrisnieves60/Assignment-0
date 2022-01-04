function frequencyCounter(word) {
  // Insert code here;
  let array = Array.from(word);  //array from word
  var freq = {};
let result=false; 
    for (var i=0; i<array.length;i++)
    {
        var character = array[i]; 
        if (freq[character]) 
        {
           freq[character]++;
        } 
        else 
        {
           freq[character] = 1;
        }

        if(freq[character]>1)
        {
           result = true; //FIX THIS!!!
        }
      }
      
return result; 
}



console.log(frequencyCounter("pencil"));
// Do not edit this line;
module.exports = frequencyCounter;