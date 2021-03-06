// Regular Expressions: Use Capture Groups to Search and Replace

/*
You can search and replace text in a string using .replace() on a string. 
The inputs for .replace() is first the regex pattern you want to search for.
The second parameter is the string to replace the match or a function to do something.

Example:
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
/// Returns "The sky is blue."

Example 2:
You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
/// Returns "Camp Code"
*/


/*
Write a regex fixRegex using three capture groups that will search for each word 
in the string "one two three". Then update the replaceText variable to replace 
"one two three" with the string "three two one" and assign the result to the 
result variable. Make sure you are utilizing capture groups in the replacement
string using the dollar sign ($) syntax.

*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result);