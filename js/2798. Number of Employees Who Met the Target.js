const hours = [0,1,2,3,4], target = 2;
var numberOfEmployeesWhoMetTarget = function(hours, target) 
{
    return hours.filter(hours=>hours>=target).length;
};

//console.log(numberOfEmployeesWhoMetTarget(hours,target))