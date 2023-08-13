const accounts = [[1,2,3],[3,2,1]];

var maximumWealth = function(accounts) {
    let max =0;
    accounts.map(element => {
        //console.log(element);
        let sum = element.reduce((x,y)=>x+y);
        if(max<sum){
            return max=sum;
        }
    });
    return max;
};

console.log(maximumWealth(accounts));