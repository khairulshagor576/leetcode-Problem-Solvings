
const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

var countNegatives = function(grid) 
{
    let result = 0;
    for (let i of grid){
        for(let j of i){
            if(j<0){
                result++;
            }
        }
    }
    return result;
};

console.log(countNegatives(grid))