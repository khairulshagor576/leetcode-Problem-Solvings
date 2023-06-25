const nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums) 
{
    //nums.sort((a,b)=>a-b);
    // const numsSet = new Set(nums);
    // const numsArr = [...numsSet];
    const arrLength = nums.length;
    let result = [];
    //console.log(numsArr);
    
    let allNumber=[];
    for(let i=1;i<=arrLength;i++)
    {
        allNumber.push(i);  
    }

    let arrayDifference = allNumber.filter(x => nums.indexOf(x)===-1);
    return (arrayDifference);
};

console.log(findDisappearedNumbers(nums));