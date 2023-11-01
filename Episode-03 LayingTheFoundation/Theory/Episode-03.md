# `LayingTheFoundation`

## Q: What is `JSX`?
JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.
* JSX is a HTML like syntax but not HTML.
```
const jsx = <h1>This is JSX</h1>
```
This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.
So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.
* The babel configuration is comes along with the `parcle`.
```
const heading=<h1>Hello World!</h1>      ==> babel ==>  const heading = /*#__PURE__*/_jsx("h1", {  children: "Hello World!" });
```

