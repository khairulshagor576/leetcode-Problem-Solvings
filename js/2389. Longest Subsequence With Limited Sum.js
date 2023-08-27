const nums = [4,5,2,1], queries = [3,10,21];

var answerQueries = function(nums, queries) 
{
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<queries.length;i++){
        sum=0;countNumber = 0;
        for(let j=0;j<nums.length;j++){
            sum+=nums[j];
            if(sum<=queries[i])
            {   
                countNumber++;
                //console.log(countNumber);   
            }else{
                 break;
            }
        }
        result.push(countNumber);
    }
    return result;
};

console.log(answerQueries(nums, queries));