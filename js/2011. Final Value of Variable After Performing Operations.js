
let operations = ["++X","++X","X++"];

var finalValueAfterOperations = function(operations) 
{
    let increment=0;
    for (const incdec of operations) {
        //console.log(incdec);
        if(incdec==='--X')
        {
          increment--;
        }else if(incdec==='X--')
        {
          increment--; 
        }else if(incdec==='X++')
        {
            increment++;
        }else if(incdec==='++X')
        {
            increment++;
        }
    }
    return increment;
};

console.log(finalValueAfterOperations(operations));