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





//TOPIC   Match Characters that Occur Zero or More Times
/*
The last challenge used the plus + sign to look for characters
 that occur one or more times. There's also an option that 
 matches characters that occur zero or more times.

The character to do this is the asterisk or star: *. */

//EXERCISE

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

//In order, the three match calls would return 
//the values ["goooooooo"], ["g"], and null.


//ANOTHER EXERCISE

/* To find the characzers that occurs zero or more */

//SOLUTION

let eplMatch = "maaaaaaad";
let mPhrase = "nice game";
let aPhrase = "match just started";
let maRegex = /ma*/;
eplMatch.match(maRegex);
mPhrase.match(maRegex);
aPhrase.match(maRegex);

console.log(eplMatch.match(maRegex));
console.log(mPhrase.match(maRegex));
console.log(aPhrase.match(maRegex));



//EXERCISE


/*
For this challenge, chewieQuote has been initialized as the 
string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. 

Create a regex chewieRegex that uses the * character to match 
an uppercase A character immediately followed by zero or more 
lowercase a characters in chewieQuote. Your regex does not 
need flags or character classes, and it should not match any 
of the other quotes.


GUIDELINES

Your regex chewieRegex should use the * character to match zero or more a characters.
Passed:Your regex should match the string A in chewieQuote.
Passed:Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
Passed:Your regex chewieRegex should match 16 characters in 
chewieQuote.
Passed:Your regex should not match any characters in the
 string He made a fair move. Screaming about it can't help you.
Passed:Your regex should not match any characters in the 
string Let him have it. It's not wise to upset a Wookiee.

*/

 let chewieQuote = "Aaaaaaaaaaaarrgh";


// // not use character classes
// /*
// let ALetters = "He made a fair move.";
// let aLetters = "Let him have it";

// */
// let chewieRegex = /Aa*/;
// let outcome = "chewieQuote.match(chewieRegex)";

// console.log(outcome);


let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

let outcome = chewieQuote.match(chewieRegex);
console.log(outcome);




//TOPIC  Find Characters with Lazy Matching

/* In regular expressions, a greedy match finds the longest 
possible part of a string that fits the regex pattern and 
returns it as a match. The alternative is called a lazy match,
 which finds the smallest possible part of the string that
  satisfies the regex pattern.
  You can apply the regex /t[a-z]*i/ to the string "titanic". 
  This regex is basically a pattern that starts with t, ends with
   i, and has some letters in between.*/

  //Find greedy Matching in Regex

  let word = "titanic";
  let reRegex = /t[a-z]*i/;
  let put = word.match(reRegex);

  console.log(put);

  /*
ANSWER
Regular expressions are by default greedy, so the match would
 return ["titani"]. It finds the largest sub-string possible 
 to fit the pattern.
*/


 // FINDING LAZY MATCHING IN REGEX

 let words = "titanic";
 let weRegex = /t[a-z]*?i/;
 let see = words.match(weRegex);

 console.log(see);

 /*
However, you can use the ? character to change it to lazy 
matching. "titanic" matched against the adjusted regex of
 /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided,
 but pattern matching an HTML string with regular expressions 
 is completely fine.


 //Find Characters with Lazy Matching 

Fix the regex /<.*>/ to return the HTML tag <h1> and not the 
text "<h1>Winter is coming</h1>". Remember the wildcard . in a
 regular expression matches any character.*/

 //Solutions
 
 let text = "<h1>Winter is coming</h1>";
 let teRegex = /<.*?>/; // it's the answer!
 let match = text.match(teRegex);
 console.log(match);

/*
The result variable should be an array with <h1> in it
Waiting:myRegex should use lazy matching
Waiting:myRegex should not include the string h1

*/





// TOPIC     Find One or More Criminals in a Hunt

/*
Time to pause and test your new regex writing skills. 
A group of criminals escaped from jail and ran away, 
but you don't know how many. However, you do know that 
they stay close together when they are around other people. 
You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or 
more times in a row. It would find matches in all of the 
following strings:

let masterWords = /Z+/;
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since 
there are no letter z characters:

""
"ABC"
"abcabc"



//EXERCISE
/*
Write a greedy regex that finds one or more criminals within 
a group of other people. A criminal is represented by the
 capital letter C.
*/


let reCriminals = /C+/; //
/*
Your regex should match one criminal (C) in the string C
Passed:Your regex should match two criminals (CC) in the string CC
Passed:Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.
Passed:Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
Passed:Your regex should not match any criminals in the empty string ""
Passed:Your regex should not match any criminals in the string P1P2P3
Passed:Your regex should match fifty criminals 
(CCCCCCCCCCCCCCCCEEEEEECCCCCCCCCCCCCCCCCCC) 
in the string P2P1P5CCCCCCCCCCCCCP3.*/

//Hint 1
//Are you surrounding your regexp in slashes?

let wordregexp = /t.[a-z]*t/;

//Hint 2
//Are you using the ‘+’ flag in your regexp?

let regexpmo = /E+/; // returns E, EE, EEE patterns








//TOPIC Match Beginning String Patterns

/* Prior challenges showed that regular expressions can
 be used to look for a number of matches. 
 They are also used to search for patterns in specific 
 positions in strings.

In an earlier challenge, you used the caret character (^) 
inside a character set to create a negated character set in the

form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for 
patterns at the beginning of strings.*/


let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let matchAnswer = firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
let notFirstAnswer = firstRegex.test(notFirst);

console.log(matchAnswer);
console.log(notFirstAnswer);

//ANSWER
/*
The first test call would return true, while the second 
would return false.*/



//EXERCISE
/*
Use the caret character in a regex to find Cal only in the 
beginning of the string rickyAndCal.*/


//SOLUTION

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let calresult = calRegex.test(rickyAndCal);

console.log(calresult);





//TOPIC     Match Ending String Patterns

/*In the last challenge, you learned to use the caret character
 to search for patterns at the beginning of strings. 
 There is also a way to search for patterns at the end of 
 strings.

You can search the end of strings using the dollar sign 
character $ at the end of the regex.*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let story = storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
let noStory = storyRegex.test(noEnding);

console.log(story);
console.log(noStory);

/*The first test call would return true, while 
the second would return false.*/

//EXERCISE
/*
Use the anchor character ($) to match the string 
caboose at the end of the string caboose
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resultCaboose = lastRegex.test(caboose);

console.log(resultCaboose);





//TOPIC   Match All Letters and Numbers


/*Using character classes, you were able to search for all 
letters of the alphabet with [a-z]. This kind of character 
class is common enough that there is a shortcut for it, 
although it includes a few extra characters as well.

The closest character class in JavaScript to match the
 alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 
 
 This character class matches upper and lowercase letters 
 plus numbers. Note, this character class also includes the 
 underscore character (_).*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//All four of these test calls would return true.

/*
These shortcut character classes are also known as shorthand
 character classes.


 //EXERCISE
Use the shorthand character class \w to count the number 
of alphanumeric characters in various quotes and strings.*/


//SOLUTION

let quoteAllLetters = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let allLetters = quoteAllLetters.match(alphabetRegexV2).length;

console.log(allLetters);

//GUIDE

/*
Your regex should use the global flag.
Passed:Your regex should use the shorthand character
 \w to match all characters which are alphanumeric.

*/





//TOPIC   Match Everything But Letters and Numbers

/*You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W to match
non-alphanumeric. Note, 
the opposite pattern uses a capital letter. 

This shortcut is the same as [^A-Za-z0-9_].*/

let shortWord = /\W/;
let number = "42%";
let sentence = "Coding!";
let makeNon = number.match(shortWord);
let makeNot = sentence.match(shortWord);

console.log(makeNon);
console.log(makeNot);

//The first match call would return the value ["%"] 
//and the second would return ["!"].



//EXERCISE

/*Use the shorthand character class \W to 
count the number of non-alphanumeric characters 
in various quotes and strings.*/


let wordSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let makeAnswer = wordSample.match(nonAlphabetRegex).length;

console.log(makeAnswer);

//GUIDE

/*
Your regex should use the global flag.
Passed:Your regex should find 6 non-alphanumeric
 characters in the string The five boxing wizards 
 jump quickly..
Passed:Your regex should use the shorthand character 
to match characters which are non-alphanumeric.


*/





//TOPIC Match All Numbers
/*
You've learned shortcuts for common string patterns like 
alphanumerics. Another common pattern is looking for just
 digits or numbers.

The shortcut to look for digit characters is \d, with a 
lowercase d. This is equal to the character class [0-9],
 which looks for a single character of any number between 
 zero and nine.



 //EXERCISE use global g
Use the shorthand character class \d to count how many
 digits are in movie titles. Written out numbers 
 ("six" instead of 6) do not count.*/


let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resultAnswer = movieName.match(numRegex).length;

console.log(resultAnswer);



//TOPIC   Match All Non-Numbers

/*The last challenge showed how to search for digits using 
the shortcut \d with a lowercase d. You can also search for
 non-digits using a similar shortcut that uses an uppercase 
 D instead.

The shortcut to look for non-digit characters is \D. 
This is equal to the character class [^0-9], which looks 
for a single character that is not a number between zero 
and nine.


//EXERCISE use \D\g; (global flag)
Use the shorthand character class for non-digits 
\D to count how many non-digits are in movie titles.*/


//SOLUTION 


let movieNames = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultNames = movieName.match(noNumRegex).length;

console.log(resultNames);


//RESULTS
/*
Your regex should use the shortcut character to match non-digit
 characters
Passed:Your regex should use the global flag.
Passed:Your regex should find no non-digits in the string 9.
Passed:Your regex should find 6 non-digits in the string Catch 22.
Passed:Your regex should find 11 non-digits in the string 101 Dalmatians.
Passed:Your regex should find 15 non-digits in the string One, Two, Three.
Passed:Your regex should find 12 non-digits in the string 21 Jump Street.
Passed:Your regex should find 17 non-digits in the string 2001:
A Space Odyssey.*/




//TOPIC  Restrict Possible Usernames

/*
Usernames are used everywhere on the internet. They are 
what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. 
Here are some simple rules that users have to follow 
when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. 

Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long.
 A two-character username can only use alphabet letters 
 as characters.

Change the regex userCheck to fit the constraints listed above.
*/



// GUIDE


/*
Your regex should match the string JACK
Passed:Your regex should not match the string J
Passed:Your regex should match the string Jo
Passed:Your regex should match the string Oceans11
Passed:Your regex should match the string RegexGuru
Passed:Your regex should not match the string 007
Passed:Your regex should not match the string 9
Passed:Your regex should not match the string A1
Passed:Your regex should not match the string BadUs3rnam3
Passed:Your regex should match the string Z97
Passed:Your regex should not match the string c57bT3
Passed:Your regex should match the string AB1
Passed:Your regex should not match the string J%4

*/

//SOLUTION

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let resultUsername = userCheck.test(username);

console.log(resultUsername);



//TOPIC    Match Whitespace
/*
The challenges so far have covered matching letters of the 
alphabet and numbers. You can also match the whitespace or 
spaces between letters.

You can search for whitespace using \s, which is 
a lowercase s. This pattern not only matches whitespace, 
but also carriage return, tab, form feed, and new line 
characters. You can think of it as similar to the character 
class [ \r\t\f\n\v].*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let spaceWhite = whiteSpace.match(spaceRegex);
//This match call would return [" ", " "].
 console.log(spaceWhite);



 //EXERCISE
 /*
 Change the regex countWhiteSpace to look for multiple
  whitespace characters in a string.*/


  let sampleWhite = "Whitespace is important in separating words";
  let countWhiteSpace = /\s/g; // Change this line
  let resultWhiteSpce = sampleWhite.match(countWhiteSpace);

  console.log(resultWhiteSpce);


  //RESULTS


  /*
Your regex should use the global flag.
Passed:Your regex should use the shorthand character \s to 
match all whitespace characters.
Passed:Your regex should find eight spaces in the string Men 
are from Mars and women are from Venus.
Passed:Your regex should find three spaces in the string 
Space: the final frontier.
Passed:Your regex should find no spaces in the string 
MindYourPersonalSpace


  */




//EXERCISE


/*
Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a
 lowercase s. You can also search for everything except 
 whitespace.

Search for non-whitespace using \S, which is an uppercase s.
 This pattern will not match whitespace, carriage return, tab,
  form feed, and new line characters. You can think of it 
  being similar to the character class [^ \r\t\f\n\v].*/

let nonWhiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
nonWhiteSpace.match(nonSpaceRegex).length;

console.log(nonWhiteSpace);

//The value returned by the .length method would be 32.


//EXERCISE
/*
Change the regex countNonWhiteSpace to look for multiple
 non-whitespace characters in a string.

*/

let sampleNonWhite = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultNonWhiteSpace = sampleNonWhite.match(countNonWhiteSpace);

console.log(resultNonWhiteSpace);

/* 
SOLUTION GUIDE
Your regex should use the global flag.
Waiting:Your regex should use the shorthand character \S 
to match all non-whitespace characters.
Waiting:Your regex should find 35 non-spaces in the string 
Men are from Mars and women are from Venus.
Waiting:Your regex should find 23 non-spaces in the string 
Space: the final frontier.
Waiting:Your regex should find 21 non-spaces in the string 
MindYourPersonalSpace


*/




//TOPIC Specify Upper and Lower Number of Matches

/*
Recall that you use the plus sign + to look for one or more 
characters and the asterisk * to look for zero or more 
characters. These are convenient but sometimes you want 
to match a certain range of patterns.

You can specify the lower and upper number of patterns with 
quantity specifiers. Quantity specifiers are used with curly 
brackets ({ and }). You put two numbers between the curly 
brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3
 and 5 times in the string ah, your regex would be /a{3,5}h/.
*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

/*
The first test call would return true, while the second 
would return false.


//EXERCISE
Change the regex ohRegex to match the entire phrase 
Oh no only when it has 3 to 6 letter h's.*/

//GUIDE


let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let resultStr = ohRegex.test(ohStr);

console.log(resultStr);


/*
Your regex should use curly brackets.
Passed:Your regex should not match the string Ohh no
Passed:Your regex should match the string Ohhh no
Passed:Your regex should match the string Ohhhh no
Passed:Your regex should match the string Ohhhhh no
Passed:Your regex should match the string Ohhhhhh no
Passed:Your regex should not match the string Ohhhhhhh 
no */




//EXERCISE    Specify Upper and Lower Number of Matches 93
/* Problem Explanation
Remember /a{2,4}/ will return true as long as there are between two to four a’s together. It will return true for any string that has more than four a’s together as well.

All these strings will return true: */

let threeAs = "aaa";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let makeRegex = /a{2,4}/;
makeRegex.test(threeAs); // true
makeRegex.test(fourAs); // true
makeRegex.test(sevenAs); // true

console.log(makeRegex.test(threeAs));
console.log(makeRegex.test(fourAs));
console.log(makeRegex.test(sevenAs));






//TOPIC    Check For Mixed Grouping of Characters

/*Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.
*/

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
let groupWord = testRegex.test(testStr);
console.log(groupWord);


//The test method here would return true.



//EXERCISE

/*Fix the regex so that it checks for the names of 
Franklin Roosevelt or Eleanor Roosevelt in a case sensitive 
manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created 
is checked against myString and either true or false is 
returned depending on whether the regex matches.*/


//SOLUTION

/*
Check For Mixed Grouping of Characters 237
Hints
Hint 1
Use a|b to check for either a or b.

Hint 2
Your regex should use mixed grouping like /P(engu|umpk)in/g.

Hint 3
Use .* to allow for middle names.*/

//Solutions
 
let myString = "Eleanor Roosevelt";
let groupRegex = /(Franklin|Eleanor).*Roosevelt/;
let resultGroup = groupRegex.test(myString);

console.log(resultGroup);





//  Reuse Patterns Using Capture Group 
/*
Hints

Given code below:*/

let matchString = "test test test";
let opsRegex = /(test)\s\1/;
let matchOps = opsRegex.test(matchString);

console.log(matchOps);

//result will match only test test because \1 
//in this example stands for the same text as most 
//recently matched by the 1st capturing group (test).

/*
If we were to literally translate the regex, 
it would look something like this:*/

let re = /(test)\s\1/;
let literalRe = /test\stest/;

//Both re and literalRe would match the same thing.

/*Hint 2
Given the code below:*/

let checkString = "test test test";
let chRegex = /(test)(\s)\1\2\1/;
let resultCheck = chRegex.test(checkString);

console.log(resultCheck);

/*result will match whole test test test because:
\1 repeats (test)
\2 repeats (\s)

Hint 3
The code below: */

let testString = "test test test test test test";
let nowRegex = /(test)(\s)\1\2\1/g;
let resultNow = nowRegex.test(testString);


/*because we used \g, our Regex doesn’t return after 
first full match (test test test) and matched all repetitions.*/ 

//Think about how you can assert the start and end of the string.




//SOLUTION GUIDE

/*Your regex should use the shorthand character class for digits.
Waiting:Your regex should reuse a capture group twice.
Waiting:Your regex should match the string 42 42 42.
Waiting:Your regex should match the string 100 100 100.
Waiting:Your regex should not match the string 42 42 42 42.
Waiting:Your regex should not match the string 42 42.
Waiting:Your regex should not match the string 101 102 103.
Waiting:Your regex should not match the string 1 2 3.
Waiting:Your regex should match the string 10 10 10.


*/
//Solution 1 (Click to Show/Hide)
let repeatNum = "42 42 42";
let okRegex = /^(\d+)\s\1\s\1$/;
let resultOk = okRegex.test(repeatNum);

console.log(resultOk);


