//let challenge = '30 Days Of JavaScript';
console.log(challenge);

//let challenge = '30 Days Of JavaScript';
console.log(challenge.length);


//let challenge = '30 Days Of JavaScript';
let uppercaseChallenge = challenge.toUpperCase();

console.log(uppercaseChallenge);

//let challenge = '30 Days Of JavaScript';
let lowercaseChallenge = challenge.toLowerCase();

console.log(lowercaseChallenge);

//let challenge = '30 Days Of JavaScript';
//let firstWord = challenge.substr(0, challenge.indexOf(' '));

console.log(firstWord);

//let challenge = '30 Days Of JavaScript';
let firstWord = challenge.substring(0, challenge.indexOf(' '));

console.log(firstWord);

//let challenge = '30 Days Of JavaScript';
// slicedPhrase = challenge.substring(3, challenge.length);

console.log(slicedPhrase);

//let challenge = '30 Days Of JavaScript';
//let slicedPhrase = challenge.slice(3);

console.log(slicedPhrase);

l//let challenge = '30 Days Of JavaScript';
//let wordToFind = 'Script';
//let containsWord = challenge.includes(wordToFind);

console.log(containsWord);


let challenge = '30 Days Of JavaScript';
let splitArray = challenge.split(' ');

console.log(splitArray);

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(', ');

console.log(companiesArray);

let originalString = '30 Days Of JavaScript';
let modifiedString = originalString.replace('JavaScript', 'Python');

console.log(modifiedString);

//let challenge = '30 Days Of JavaScript';
let characterAtIndex15 = challenge.charAt(15);

console.log(characterAtIndex15);

//let challenge = '30 Days Of JavaScript';
let charCodeOfJ = challenge.charCodeAt(challenge.indexOf('J'));

console.log(charCodeOfJ);

//let challenge = '30 Days Of JavaScript';
let positionOfA = challenge.indexOf('a');

console.log(positionOfA);

//let challenge = '30 Days Of JavaScript';
let lastPositionOfA = challenge.lastIndexOf('a');

console.log(lastPositionOfA);


let sentence = 'You cannot end a sentence with because because because is a conjunction';
let positionOfBecause = sentence.indexOf('because');

console.log(positionOfBecause);

//let sentence = 'You cannot end a sentence with because because because is a conjunction';
let lastPositionOfBecause = sentence.lastIndexOf('because');

console.log(lastPositionOfBecause);


//let sentence = 'You cannot end a sentence with because because because is a conjunction';
//let positionOfBecause = sentence.search('because');

console.log(positionOfBecause);


//let str = ' 30 Days Of JavaScript ';
let trimmedStr = str.trim();

console.log(trimmedStr);

//let str = '30 Days Of JavaScript';
//let result = str.startsWith('30');

console.log(result);

//let str = '30 Days Of JavaScript';
//let result = str.startsWith('30');

console.log(result);

//let str = '30 Days Of JavaScript';
let result = str.endsWith('Script');

console.log(result);

//let str = '30 Days Of JavaScript';
let matches = str.match(/a/g);

console.log(matches);

let part1 = '30 Days of';
let part2 = ' JavaScript';
let mergedStr = part1.concat(part2);

console.log(mergedStr);

let str = '30 Days Of JavaScript';
let repeatedStr = str.repeat(2);

console.log(repeatedStr);


//let quote = 'There is no exercise better for the heart than reaching down and lifting people up. - John Holmes';
console.log(quote);

let quote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead. - Mother Teresa";
console.log(quote);

let value = '10';

if (typeof value === 'string') {
  value = Number(value); // Convert the string to a number
}

if (value === 10) {
  console.log("The value is exactly equal to 10.");
} else {
  console.log("The value is not exactly equal to 10. Now it is:", value);
}


//let value = parseFloat('9.8');

if (value !== 10) {
  value = 10;
}

console.log(value);

let word1 = 'python';
let word2 = 'jargon';

let checkWord1 = word1.includes('on');
let checkWord2 = word2.includes('on');

console.log("'on' found in 'python':", checkWord1);
console.log("'on' found in 'jargon':", checkWord2);


//let sentence = "I hope this course is not full of jargon.";
let checkJargon = sentence.includes('jargon');

console.log("'jargon' found in the sentence:", checkJargon);


let randomNumber1 = Math.floor(Math.random() * 101);

console.log("Random number between 0 and 100:", randomNumber1);


let randomNumber2 = Math.floor(Math.random() * 51) + 50;

console.log("Random number between 50 and 100:", randomNumber2);


let randomNumber3 = Math.floor(Math.random() * 256);

console.log("Random number between 0 and 255:", randomNumber3);


let word = 'JavaScript';
let randomIndex = Math.floor(Math.random() * word.length);
let randomCharacter = word.charAt(randomIndex);

console.log("Random character from 'JavaScript':", randomCharacter);

//let sentence = 'You cannot end a sentence with because because because is a conjunction';
//let phrase = sentence.substr(30, 23);

console.log(phrase);


//let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
//let count = (sentence.match(/love/gi)).length;

console.log("Number of occurrences of 'love' in the sentence:", count);

//let sentence = 'You cannot end a sentence with because because because is a conjunction';
let count = (sentence.match(/because/g)).length;

console.log("Number of occurrences of 'because' in the sentence:", count);

//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanText = sentence.replace(/[^\w\s]/g, '').toLowerCase();
let words = cleanText.split(/\s+/);

console.log("Cleaned Text:", cleanText);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g);
let totalIncome = 0;

if (numbers) {
  for (let number of numbers) {
    totalIncome += parseInt(number);
  }
}

console.log("Total Annual Income:", totalIncome);













































































































































