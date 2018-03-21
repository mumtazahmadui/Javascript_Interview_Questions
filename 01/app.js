//1. What will be the output and why?
var a = b = 3;

console.dir(a);
console.dir(b);
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//2. Palindrome using Recursion
var a = 0, b = 1;
var number = 0;
function Palindrome(a, b) {
    while (number < 8) {
        console.log(a + b);
        number++;
        Palindrome(b, a + b);
    }
}
console.log(a);
console.log(b);
Palindrome(a, b);

//3. Reverse using Recursion
var str = "Mumtaz";
var reversedString = '';
var index = str.length - 1;
function Reverse(str, index) {
    if (index < 0) {
        console.log(reversedString);
    }
    else {
        reversedString = reversedString + str[index];
        Reverse(str, index - 1);
    }
}
Reverse(str, index);


