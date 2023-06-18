
const arr = [3,5,1];

var canMakeArithmeticProgression = function(arr) 
{
    arr.sort((a, b) => a - b);
    let common_difference = arr[1]-arr[0];
    //console.log(common_difference);
    for (let index = 2; index < arr.length; index++) 
    {
        if(arr[index]-arr[index-1]!==common_difference){
            return false;
        }
        
    }
    return true;

};

canMakeArithmeticProgression(arr);