const original = [1,2,3,4], m = 2, n = 2;

var construct2DArray = function(original, m, n) 
{
    if (original.length !== (m*n)) return [];
    let result = [];
    let arr = [];
    for (let i = 0; i < original.length; i++) 
    {
        arr.push(original[i]);
        if(arr.length===n){
            result.push(arr);
            arr=[];
        }
    }
    //console.log(result);
    return result
};

construct2DArray(original,m,n);