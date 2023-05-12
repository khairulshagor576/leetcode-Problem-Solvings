// 1491. Average Salary Excluding the Minimum and Maximum Salary


let Salary = salary => 
{
   let maxSalary = Math.max(...salary);  
   let minSalary = Math.min(...salary);  
   //console.log(minSalary)
   let sum = salary.reduce((a,b)=>
     a+b)
   //console.log(sum);
  let newSum = sum -(maxSalary+minSalary);
  //console.log(newSum);

  return finalResult = newSum/(salary.length-2);
};

console.log(Salary([2500,5000,6500,70000]));