// *Question 86:* Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// *Explain & TIP:* The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!"));