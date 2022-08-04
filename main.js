//TOPIC Match Anything with Wildcard Period

/*Sometimes you won't (or don't need to) know the exact 
characters in your patterns. Thinking of all words that 
match, say, a misspelling would take a long time. 

Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. 
The wildcard is also called dot and period. You can use 

the wildcard character just like any other character in
 the regex. For example. 

 if you wanted to match hug, huh, hut, and hum, 
 you can use the regex /hu./ to match all four words*/

 //EXERCISE


 let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

//Both of these test calls would return true.


//EXERCISE

/*
Complete the regex unRegex so that it matches the strings 
run, sun, fun, pun, nun, and bun. Your regex should use the
 wildcard character

*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(unRegex.test(exampleStr));





//TOPIC  Match Single Character with Multiple Possibilities

/*
You learned how to match literal patterns (/literal/) and 
wildcard character (/./). 

Those are the extremes of regular expressions, where one finds
 exact matches and the other matches everything. 
 
 There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with
 character classes. Character classes allow you to define a 
 group of characters you wish to match by placing them inside 
 square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog.
 You can create the regex /b[aiu]g/ to do this. 
 
 The [aiu] is the character class that will only match the 
 characters a, i, or u.
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//Output
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

//In order, the four match calls would return the values
 //["big"], ["bag"], ["bug"], and null.


 //EXERCISE match bed. bad, and bid but not bod.
 // Create the regex /b[eai]d/ to do this.
 // the character class [eai] that will match e, a, i.
 let bedStr = "bed";
 let badStr = "bad";
 let bidStr = "bid";
 let bodStr = "bod";
 let bdRegex = /b[eai]d/;
 bedStr.match(bdRegex);
 badStr.match(bdRegex);
 bidStr.match(bdRegex);
 bodStr.match(bdRegex);

 console.log(bedStr.match(bdRegex), badStr.match(bdRegex), bidStr.match(bdRegex), 
 bodStr.match(bdRegex));
/*
 //OUTPUT OR
 console.log(bedStr.match(bdRegex));
 console.log(badStr.match(bdRegex));
 console.log(bidStr.match(bdRegex));
 console.log(bodStr.match(bdRegex));

 //["bed"], ["bad"], ["bid"], and null*/




 //EXERCISE


 /*
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

 */


/*
You should find all 25 vowels.
Waiting:Your regex vowelRegex should use a character class.
Waiting:Your regex vowelRegex should use the global flag.
Waiting:Your regex vowelRegex should use the case insensitive flag.
Waiting:Your regex should not match any consonants.

*/

//SOLUTION




let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let answer = quoteSample.match(vowelRegex); 

// Change this line

console.log(answer);



//TOPIC Match Letters of the Alphabet
/*
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would 
use [a-e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bfRegex = /[a-e]at/;
catStr.match(bfRegex);
batStr.match(bfRegex);
matStr.match(bfRegex);

console.log(catStr.match(bfRegex));
console.log(batStr.match(bfRegex));
console.log(matStr.match(bfRegex));


/*
In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.*/







//TOPIC Match all the letters in the string quoteSample.

//Note: Be sure to match both uppercase and lowercase letters.


/*
Your regex alphabetRegex should match 35 items.
Passed:Your regex alphabetRegex should use the global flag.
Passed:Your regex alphabetRegex should use the case insensitive flag.
*/

let quoteGerald = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let out = quoteSample.match(alphabetRegex); // Change this line

console.log(out);






//TOPIC  Match Numbers and Letters of the Alphabet


/* Using the hyphen (-) to match a range of characters 
is not limited to letters. It also works to match a range
 of numbers.

For example, /[0-5]/ matches any number between 0 and 5, 
including the 0 and 5.

Also, it is possible to combine a range of letters and
 numbers in a single character set.*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

console.log(jennyStr.match(myRegex));



//EXERCISE

/*
Create a single regex that matches a range of letters 
between h and s, and a range of numbers between 2 and 6. 
Remember to include the appropriate flags in the regex.

*/

/*
Your regex myRegex should match 17 items.
Passed:Your regex myRegex should use the global flag.
Passed:Your regex myRegex should use the case insensitive flag.

*/


let workSample = "Blueberry 3.141592653s are delicious.";
let ourRegex = /[h-s2-6]/gi; // Change this line
let quote = quoteSample.match(myRegex); // Change this line

//console.log(quote);
console.log(quoteSample.match(myRegex));







//Problem Explanation
/*In this challenge, you’re asked to match all of the letters 
of the alphabet within a given string. Not only are you
 matching/searching for these characters, but you’re asked
  to extract them.

Hints
Hint 1
Remember that you’re asked to extract the letters from the 
string – this cannot be done with the .test() method because
 it returns True or False. In this case, we need to extract 
 the actual result from the string using the .match() method.

Hint 2
Are you using the match() method character case flag with
 brackets? e.g. regExp = /[a-e]/ vs regExp = /a-e/.
 
 What this allows us to do is search through the string for 
 any characters matching [a, b, c, … e] using the shorthand 
 notation /[a-e]/.

Solutions
Solution 1 (Click to Show/Hide)
*/
let madeSample = "The quick brown fox jumps over the lazy dog.";
let alphaRegex = /[a-z]/gi; // Change this line
let made = madeSample.match(alphaRegex); // Change this line

//console.log(madeSample.match(alphaRegex));
console.log(made);

//EXERCISES

/* Match Numbers and Letters of the Alphabet 30
Problem Explanation
In this challenge, you are asked to return a collection of both numbers and letters extracted from a string. Our goal is to create a single regexp that captures the range of letters between h and s, and the numbers from 2 to 6.

Hints
Hint 1
Are you using the match() method? If so, then are you calling the method from the appropriate variable? i.e.
*/


let input_string = "The string you are testing on";
let yourRegExp = /[h-s]/;
let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S

//let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function

console.log(input_string.match(yourRegExp));
//console.log(yourRegExp.match(input_string));



//Hint 2
/*
Did you remember to enable the regexp flags such as “i” 
for ignoring case and “g” for retreiving multiple values? 
If so, then are you including both the character case match
 for numbers AND letters?*/
let matchNumber = "The name of my AsaGerald is Eze"
let regexp = /[a-z1-100]/gi;
let asaGerald = matchNumber.match(regexp);

console.log(asaGerald);


// above code returns all characters from A to Z, along with all numbers from 1 to 100
// this includes the letter A and Z and the numbers 1 and 100







//TOPIC  Match Single Characters Not Specified

/*So far, you have created a set of characters that you want 
to match, but you could also create a set of characters that
 you do not want to match. These types of character sets are
  called negated character sets.

To create a negated character set, you place a caret character 
(^) after the opening bracket and before the characters you do
 not want to match.

For example, /[^aeiou]/gi matches all characters that are not
 a vowel. Note that characters like ., !, [, @, / and 
 white space are matched - the negated vowel character 
 set only excludes the vowel characters.*/


 //EXERCISE

 /*Create a single regex that matches all characters 
 that are not a number or a vowel. Remember to include 
 the appropriate flags in the regex.

 */

 let makeSample = "3 blind mice.";
let urRegex = /[^aeiou^0-9]/gi; // Change this line
let make = makeSample.match(urRegex); // Change this line



// Problem Explanation

/*In this challenge, we are asked to return a collection of 
matches that are not exactly specified. Whereas previous
 regexp challenges would have you match within the 
 character case [a-z], this challenge instead asks us 
 to negate these matches using the caret character [^a-z]. 
 
 Our goal then is to return a negated collection (non-matches)
  of letters that are not vowels nor numbers.

Hints
Hint 1
Did you remember to surround your regexp in both brackets and 
slashes?

*/

//let exampleRegExp = /[^a-z]/;
/*
If so, then double check you’re adding the appropriate flags:

i : Ignores upper and lower case from search/match
g : Retrieves multiple values; default is set to return the first match it encounters
^ : Negates the matches following this flag
Hint 2
Be sure to check whether your number range is correct – the challenge asks us to negate all numbers from 0 to 9. This can be done using the negate caret placed immediately after the first opening bracket of your regexp.

let numbersRegExp = /[^0-9]/gi;*/


//Solutions
let exampleSample = "3 blind mice.";
let onRegex = /[^aeiou^0-9]/gi; // Change this line
let get = quoteSample.match(onRegex); // Change this line


console.log(get);



//TOPIC  Match Characters that Occur One or More Times


/* Sometimes, you need to match a character (or group of characters)
 that appears one or more times in a row. 
 
 This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. 

Remember, the character or pattern has to be present 
consecutively. That is, the character has to repeat one 
after the other.

For example, /a+/g would find one match in abc and return ["a"].
 Because of the +, it would also find a single match in aabc 
 and return ["aa"].

If it were instead checking the string abab, it would find 
two matches and return ["a", "a"] because the a characters 
are not in a row - there is a b between them. Finally, since 
there is no a in the string bcd, it wouldn't find a match

*/


//EXERCISE Match Characters that Occur One or More Times


/*
You want to find matches when the letter s occurs one or 
more times in Mississippi. Write a regex that uses the + sign.
*/

//HINTS

/*
Your regex myRegex should use the + sign to match 
one or more s characters.
Passed:Your regex myRegex should match 2 items.

Passed:The result variable should be an array 
with two matches of ss

*/


let difficultSpelling = "Mississippi";
let doubleRegex = /s+/g; // Change this line
let double = difficultSpelling.match(doubleRegex);
console.log(double);