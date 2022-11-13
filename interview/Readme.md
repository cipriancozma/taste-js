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

Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
function test(){
return
{
a:5
}
}
const obj=test();
console.log(obj);

Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?
