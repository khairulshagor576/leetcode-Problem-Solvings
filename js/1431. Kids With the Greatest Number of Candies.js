let candies = [2,3,5,1,3], extraCandies = 3;

var kidsWithCandies = function(candies, extraCandies) {
    let higestNumber = candies[0];
    let length       = candies.length;
    const result     = [];

    for(let i=1;i<length;i++){
        if(higestNumber<candies[i])
        {
            higestNumber=candies[i];
        }
    }

    for(let i=0;i<length;i++){
        if(candies[i]+extraCandies>=higestNumber){
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result;
};

console.log(kidsWithCandies(candies,extraCandies));