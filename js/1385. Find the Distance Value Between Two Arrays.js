
const arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;

var findTheDistanceValue = function(arr1, arr2, d) 
{
    return arr1.filter(n1=>arr2.every(n2=>Math.abs(n1-n2)> d)).length;
};

console.log(findTheDistanceValue(arr1, arr2, d));