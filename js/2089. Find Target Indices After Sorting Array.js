
const nums = [1,2,5,2,3], target = 2;

var targetIndices = function(nums, target) 
{
    let result = [];
    const numsNew = nums.sort((a,b)=>a-b);
    //console.log(numsNew);
    for(let i=0;i<numsNew.length;i++){
        if(numsNew[i]===target){
            result.push(i);
        }
    }
    return result;
};

console.log(targetIndices(nums, target));