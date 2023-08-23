
const nums = [-2,-1,-1,1,2,3];

var maximumCount = function(nums) 
{
    let ncount = 0, pcount = 0;
    nums.forEach(n => {
        //console.log(n);
        if (n > 0) pcount++;
        else if (0 > n) ncount++;
    }) 
    
    return ncount > pcount ? ncount : pcount;
};

console.log(maximumCount(nums));