// Count Odd Numbers in an Interval Range

//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).


let countOdds = function(low, high) 
{
   let count=0;
   for(let x=low;x<=high;x++)
   {
   	if(x%2===1)
      {
         count++;
      }
   } 
   return count;
};

console.log(countOdds(3,7));