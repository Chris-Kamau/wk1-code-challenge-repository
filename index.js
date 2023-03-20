//Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


// Define a function called studentMarks that takes a single parameter called marks
function studentMarks(marks){
  // Check if the marks are less than 0 or greater than 100
  if(marks<0 || marks>100){
    // If marks are invalid, return an error message
    return "Invalid mark. Please enter a number between 0 and 100.";
  } else{
    // If marks are valid, define a variable called grade
    let grade;
    // Check if marks are equal to 79
    if (marks === 79) {
      // If marks are equal to 79, assign the grade of A and return it
      return "Grade: A";
    } else if (marks >= 60 && marks <= 79) {
      // If marks are between 60 and 79, assign the grade of B and return it
      return "Grade: B";
    } else if (marks >= 49 && marks <= 59) {
      // If marks are between 49 and 59, assign the grade of C and return it
      return "Grade: C";
    } else if (marks >= 40 && marks <= 49) {
      // If marks are between 40 and 49, assign the grade of D and return it
      return "Grade: D";
    } else {
      // If marks are less than 40, assign the grade of E and return it
      return "Grade: E";
    } 
  }
}

// Call the studentMarks function with the value 65 and print the result to the console
console.log(studentMarks(65));


//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.



// Define a function named demeritPoints that takes a parameter 'speed'

function demeritPoints(speed) {
    // Initialize a variable 'points' to 0
    let points = 0;
  
    // Check if speed is less than 70
    if (speed < 70) {
      // If speed is less than 70, return "OK"
      return "OK";
    } else {
      // If speed is greater than or equal to 70, calculate the demerit points
      // by subtracting the speed limit (70) from the actual speed and dividing
      // the result by 5 
      points = Math.floor((speed - 70) / 5);
  
      // Check if the number of demerit points is greater than 12
      if (points > 12) {
        // If the number of demerit points is greater than 12, return "License suspended"
        return "License suspended";
      } else {
        // If the number of demerit points is less than or equal to 12, return the number of points
        return `Points: ${points}`;
      }
    }
  }
  
  // Call the demeritPoints function with a speed of 80 and log the output to the console
  console.log(demeritPoints(80)); // Output: Points: 2
  



  //Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

 
  function calculateNetSalary(basicSalary, benefits) {

    const grossSalary = basicSalary + benefits;
    
    
    let taxableIncome = grossSalary - 2400 - 5000 - 9000;
    if (taxableIncome > 20000) {
      taxableIncome -= 20000;
    } else {
      taxableIncome = 0;
    }
    
   
    let tax = 0;
    if (taxableIncome <= 24000) {
      tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
      tax = (taxableIncome - 24000) * 0.25 + 2400;
    } else {
      tax = (taxableIncome - 32333) * 0.3 + 5600;
    }
    
    
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
    } else {
      nhifDeduction = 1700;
    }
    
  
    let nssfContribution = 0;
    if (basicSalary <= 6000) {
      nssfContribution = basicSalary * 0.06;
    } else if (basicSalary <= 18000) {
      nssfContribution = 360;
    }
    
  
    let fringeBenefitTax = 0;
    const marketInterestRate = 9; 
    const marketInterestRateDecimal = marketInterestRate / 100;
    if (benefits > 0 && benefits * marketInterestRateDecimal > 0.5 * basicSalary) {
     
    }
}

 