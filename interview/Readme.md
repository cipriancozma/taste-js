NULL VS UNDEFINED  
Q.1) What is "undefined" in JavaScript ?  
R.1) A variable which is not assigned a value is "undefined"

Q.2) What will be the output of undefined==null & undefined===null ? Why ?  
R.2) First comparison will be equal to true because the both represent nothingless and the second comparison represents false because both are different data types

Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)  
R.3) Yes, you can, because "undefined" itself is a keyword you can use

FUNCTION SCOPE VS BLOCK SCOPE  
Q.1) What is hoisting in javascript ?  
R.1) Process that is happening behind the scene and it is bringing the declarations on top

Q.2) How does block scope work ?  
R.2) It is the brackets {} that creates separate scope for declarations existing in that block

Q.3) What is the scope of a variable ?  
R.3) It is the availability or visibility of a variable

AUTOMATIC SEMICOLON INSERTION (ASI)  
Q.1) Should you terminate all lines by a “;” ?  
R.1) It is a good practice to have a semicolon at the end.

Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
function test(){
return
{
a:5
}
}
const obj=test();
console.log(obj);  
R.2) Because JS will put a semicolon at the end of return and it will return undefined

Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?  
R.3) No, it doesn't change the behaviour and it does not mean you have to end all lines with a ";"

REST VS SPREAD OPERATOR  
Q.1) Can we use arguments object in arrow function?  
R.1.) No, it cannot be used.

Q.2) Which is the best way to create new arrays with assignment?  
R.2) The best way to assign arrays is to use spread operator (e.g. let arr = [...arr1, 5, 6, 7])

Q.3) How can you handle the “n” number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.  
R.3) Using the rest operator

Q.4) Can the rest operator be placed anywhere in the function parameter list? Or
function test(...a,b){
//statements
}
Is this piece of code valid? Give the reason.  
R.4) No, it should be placed as the last element, if we have more parameters, the rest one should be the last one.

WHEN DO WE GET INFINITY || -INFINITY AS OUTPUT  
Q.1) How will you put a validation for positive or negative Infinity?  
R.1)

Q.2) What will be the output of this code?  
Code:
console.log(1/0);  
R.2)
