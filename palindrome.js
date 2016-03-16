
function palindrome(string) {
  // Convert string to lowercase, match regex, and join array into a string
 var str = string.toLowerCase().match(/\w/g).join("");
 // Declare reverse - split string into substring, reverse array and join into a string
 var reverse = str.split('').reverse().join('');


 if (str === reverse) {
    return console.log(string + " " + "is a palindrome");
 }
 else {
    return console.log(string + " " + "is not a palindrome");
 }
};
