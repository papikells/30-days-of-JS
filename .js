// Declare variables and assign values
var firstName = "Ibukun";
var lastName = "Aladesae";
var country = "Nigeria";
var city = "Ibadan";
var age = 24;
var isMarried = false;
var year = 2023;

// Use typeof operator to check data types
console.log("firstName:", typeof firstName);   // string
console.log("lastName:", typeof lastName);     // string
console.log("country:", typeof country);       // string
console.log("city:", typeof city);             // string
console.log("age:", typeof age);               // number
console.log("isMarried:", typeof isMarried);   // boolean
console.log("year:", typeof year);             // number


console.log(typeof '10' === typeof 10); // false
console.log('10' === 10); // false

console.log(parseInt('9.8') === 10); // false

//Truthy  values:

true
'Hello' ('a non-empty string')
42 ('a non-zero number')

//Falsy values:

false
'' ('an empty string')
0 (zero)

console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false (loose equality, type coerced)
console.log(4 == '4');  // true (loose equality, type coerced)
console.log(4 === '4'); // false (strict equality, different types)
var pythonLength = 'python'.length;
var jargonLength = 'jargon'.length;

console.log(pythonLength === jargonLength); // false



console.log(4 > 3 && 10 < 12);      // true && true => true
console.log(4 > 3 && 10 > 12);      // true && false => false
console.log(4 > 3 || 10 < 12);      // true || true => true
console.log(4 > 3 || 10 > 12);      // true || false => true
console.log(!(4 > 3));              // !(true) => false
console.log(!(4 < 3));              // !(false) => true
console.log(!(false));             // true
console.log(!(4 > 3 && 10 < 12));  // !(true && true) => false
console.log(!(4 > 3 && 10 > 12));  // !(true && false) => true
console.log(!(4 === '4'));         // true (loose equality, type coerced)
console.log("dragon".includes("on")); // false
console.log("python".includes("on")); // true

// Prompt the user to enter the base and height
var base = parseFloat(prompt("Enter base:"));
var height = parseFloat(prompt("Enter height:"));

// Calculate the area of the triangle
var area = 0.5 * base * height;

// Display the result
console.log("The area of the triangle is", area);


// Prompt the user to enter base and height
var baseInput = prompt("Enter the base of the triangle:");
var heightInput = prompt("Enter the height of the triangle:");

// Convert the inputs to numbers
var base = parseFloat(baseInput);
var height = parseFloat(heightInput);

// Check if the inputs are valid numbers
if (!isNaN(base) && !isNaN(height)) {
    // Calculate the area of the triangle
    var area = 0.5 * base * height;

    // Display the result
    console.log("The area of the triangle is:", area);
} else {
    console.log("Invalid input. Please enter valid numbers for base and height.");
}


// Prompt the user to enter the radius
var radiusInput = prompt("Enter the radius of the circle:");

// Convert the input to a number
var radius = parseFloat(radiusInput);

// Check if the input is a valid number
if (!isNaN(radius)) {
    // Define the value of pi
    var pi = 3.14;

    // Calculate the area of the circle
    var area = pi * radius * radius;

    // Calculate the circumference of the circle
    var circumference = 2 * pi * radius;

    // Display the results
    console.log("The area of the circle is:", area);
    console.log("The circumference of the circle is:", circumference);
} else {
    console.log("Invalid input. Please enter a valid number for the radius.");
}


//Let's calculate the slope, x-intercept, and y-intercept:

//Slope (m): The coefficient of "x" in the equation is 2, so the slope is 2.

//Y-Intercept (b): The constant term in the equation is -2, so the y-intercept is -2.

//X-Intercept: To find the x-intercept, set y to 0 in the equation and solve for x:
//0 = 2x - 2
//2x = 2
//x = 1

//So, the x-intercept is 1.

//In summary:

//Slope (m): 2
//-Intercept (b): -2
//X-Intercept: 1



// Prompt the user to enter hours and rate per hour
var hoursWorked = parseFloat(prompt("Enter hours:"));
var ratePerHour = parseFloat(prompt("Enter rate per hour:"));

// Check if the inputs are valid numbers
if (!isNaN(hoursWorked) && !isNaN(ratePerHour)) {
    // Calculate the weekly earning
    var weeklyEarning = hoursWorked * ratePerHour;

    // Display the result
    console.log("Your weekly earning is", weeklyEarning);
} else {
    console.log("Invalid input. Please enter valid numbers for hours and rate per hour.");
}


// Compare first name and last name lengths
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
}

// Compare ages
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`);

// Check if user is old enough to drive
let birthYear = parseInt(prompt("Enter birth year:"));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive.`);
} else {
  let yearsToWait = 18 - age;
  console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}

// Calculate seconds a person can live
let yearsToLive = parseInt(prompt("Enter number of years you live:"));
let secondsPerYear = 365 * 24 * 60 * 60;
let totalSeconds = yearsToLive * secondsPerYear;
console.log(`You lived ${totalSeconds} seconds.`);

// Create human-readable time formats
let currentDate = new Date();
let formattedDateTime1 = currentDate.toISOString().slice(0, 16).replace('T', ' '); // YYYY-MM-DD HH:mm
let formattedDateTime2 = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString(); // DD/MM/YYYY HH:mm

console.log("Formatted DateTime 1:", formattedDateTime1);
console.log("Formatted DateTime 2:", formattedDateTime2);


function formatTwoDigits(num) {
    return num < 10 ? '0' + num : num;
  }
  
  //let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = formatTwoDigits(currentDate.getMonth() + 1); // Month is 0-indexed
  let day = formatTwoDigits(currentDate.getDate());
  let hours = formatTwoDigits(currentDate.getHours());
  let minutes = formatTwoDigits(currentDate.getMinutes());
  
  let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  console.log("Formatted DateTime:", formattedDateTime);
  




















