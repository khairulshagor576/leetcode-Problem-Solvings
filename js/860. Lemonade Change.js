
const bills = [5,5,5,10,20];

var lemonadeChange = function(bills) {
    let fives = 0,tens = 0;
    for(let i=0; i < bills.length; i++){
        if(bills[i] === 5) fives++;
        else if(bills[i] === 10){
            if (fives <= 0) return false;
            else fives--, tens++;
        } 
        else if(bills[i] === 20) 
        {
            if(fives > 0 && tens > 0)fives--, tens--; 
            else if(fives >= 3) fives -= 3;
            else return false;
        }
    }
    return true;
};

console.log(lemonadeChange(bills));