1. How JavaScript works?
   R: Everything in JS happens inside an "execution context".
   Execution context is a box, divided into two columns, one is memory, named also variable environment and the other one is the code or thread of execution.
   The memory part is the place where the variables and functions are stored as key value pairs.
   The code part is the place where code is executed one line at at time.

   JS is synchronous, single threaded language. This means that JS can execute one command at a time (single threaded) and these commands can be run in a specific order (synchronous), only after the previous command was finished.

2. What happens when you run JS code?
   R: The execution context is created in two phases:

   - Memory Creation Phase
   - Code Execution Phase
     For every function, an execution context will be created and after the function returns, that execution context will be deleted.

     JS has a call stack. In the bottom of the stack we have our global execution context. Every function is put on the call stack, after is run and we have a result, the function will be moved out of the stack.

3. Hoisting in JS - variables && functions
   R: You can access values that are returned from a function or variable even before you initialize or put some value in it.
   In the first phase, JS will allocate memory to each variable and function. For variables will initialize them with undefined.
   Arrow functions behaves as a variable so if you are calling the function before it's initialization, it will throw an error.

4. How functions work in JS?
   R: When we invoke a function, first of all to that function it will be allocate some space in the memory and it will point to the function code.
   When a function is called, an execution context is created. As soon as the execution context is created, this function will be put in the call stack.
   After we finish with the code from the function, the execution context is gone and also the function that is in the call stack will be gone.
   After these steps we will go again to the global execution context and continue with the code.

5. Window & this keyword
   R: The shortest JS program is...is...an empty file :)))))
   Window is a global object which is created along with a global execution context.

6. Undefined vs Not Defined
   R:
