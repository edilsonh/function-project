// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(firstNumber, secondNumber){
    // Your answer here
    if (firstNumber > secondNumber) {
      return "First number is greater which is " + firstNumber;
    } else if (firstNumber < secondNumber) {
      return "Second number is greater which is " + secondNumber;
    }
}

let aNumber = 3;
let bNumber = 8;
console.log(max(aNumber, bNumber));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(playerOne, playerTwo, playerThree){
    // Your answer here
    if ((playerOne > playerTwo) && (playerOne > playerThree)) {
      return "Jack is greater than the rest";
    } else if ((playerTwo > playerOne) && (playerTwo > playerThree)) {
      return "Jill is greater than the rest";
    } else if ((playerThree > playerOne) && (playerThree > playerTwo)) {
      return "Bill is greater than the rest";
    }
}

let jack = 84;
let jill = 106;
let bill = 95;

console.log(maxOfThree(jack, jill, bill));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if ((char === 'a') ||
        (char === 'e') ||
        (char === 'i') ||
        (char === 'o') ||
        (char === 'u')) {
      return true;
    } else {
      return false;
    }
}
let apple = 'a';
console.log(isVowel(apple));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(firstScore, secondScore) {
  return firstScore + secondScore;
}
let gameOne = 17;
let gameTwo = 33;
console.log(sum(gameOne, gameTwo));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(striker, leftWing, rightWing) {
  return ((striker + leftWing + rightWing)/3);
}
let messi = 31;
let neymar = 17;
let suarez = 15;
console.log(avg(messi, neymar, suarez));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(lastName) {
  return lastName.length;
}
let firstDriver = 'Mike';
console.log(getLength(firstDriver));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(firstQuest, secondQuest) {
  if (firstQuest < secondQuest) {
    return true;
  } else {
    return false;
  }
}
let journeyOne = 43;
let journeyTwo = 76;
console.log(greaterThan(journeyOne, journeyTwo));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(newFriend) {
  return 'Hello, ' + newFriend + '!';
}
let classmate = 'Xavier';
console.log(greet(classmate));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(person, vehicle, area, state) {
  return person + ' rode a ' + vehicle +  ' through the ' + area + ' and got there ' + state;
}
let name = 'Oscar';
let part = 'motorcycle';
let road = 'forest';
let result = 'safely';

console.log(madlib(name, part, road, result));
