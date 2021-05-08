function calculatesal (salary,Shifts) {
  var salary = 8001;
  var shifts = 2;
if (salary > 8000)
 console.log("Salary too large ");
else if (shifts < 0)
 console.log("Shifts too small\n");
else if (salary < 0)
 console.log("Salary too small");
else {
let savings = (salary * 0.5) + (salary * 0.02 * shifts);
 console.log(savings);
} 

 
}

calculatesal();
