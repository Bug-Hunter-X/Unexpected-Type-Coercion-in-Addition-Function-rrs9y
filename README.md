# Unexpected Type Coercion in JavaScript Addition Function

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion during addition. The `foo` function is designed to add two numbers; however, it exhibits unexpected behavior when dealing with `null` values and type coercion between strings and numbers.

## The Bug

The primary issue lies in the function's handling of `null` values and mixed data types. When either `a` or `b` is `null`, the function correctly returns `null`.  However, when one argument is a number and the other is a string, the `+` operator performs string concatenation instead of numerical addition.

## The Solution

The solution involves explicitly checking the type of the inputs and performing type conversion before addition to ensure the correct numerical operation is always performed.  The solution also provides more robust error handling.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run `bug.js` in a JavaScript environment (e.g., Node.js) to observe the unexpected output.
4. Open `bugSolution.js` to see the corrected implementation.
5. Run `bugSolution.js` to see the expected numerical addition.
