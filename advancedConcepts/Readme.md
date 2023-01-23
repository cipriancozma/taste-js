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
   R:
