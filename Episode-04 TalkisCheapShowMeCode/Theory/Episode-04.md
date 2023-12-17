# `Episode-04 Talk is cheap show me the Code`

## Q) Is `JSX` mandatory for react?
Yes, `JSX is not mandatory for using React`.Using React without JSX is convenient when we set up bigger projects. JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React.
Take a look at the below code:
```
const start = <h1> Here it comes, JSX </h1>
```
Although this is a simple JSX in React, the browser does not recognize it since it is not genuine Javascript code. That's why an HTML tag is applied to a variable that isn't a string but rather HTML code. So we utilize a tool like Babel, a JavaScript compiler/transpiler, to turn it into browser-friendly JavaScript code.

## Q) Is `ES6` mandatory for React?

## Q) How can I write `comments` in JSX?
```
{/* This is a single line comment */}

{/* This is
a multiline 
comment */}
```
Note: Only /* */ is used inside the `curly braces`. Any other character like the popular double forward slash //, will throw an error.

## Q)`React.Fragments`?
Fragments are syntax that allow us to add multiple elements to a React component without wrapping them in an extra DOM node.
Let’s take a look at the following code:

<img align="center" width="359" alt="image" src="https://github.com/striver02/Namaste-React/assets/112791483/71edf4c2-d80e-41b7-a219-ec3f138e3abe">

This is a simple React component. When we return only one JSX in a component, we can avoid wrapping the JSX in another wrapper element as seen above. However, when we add more than one JSX element like so:

<img width="334" alt="image" src="https://github.com/striver02/Namaste-React/assets/112791483/6bfc1d2f-a7ad-40b6-9e63-60204ef6ba35">

We will encounter a SyntaxError. And thus, crashing our application in development.
In React, when a component returns multiple elements, we must wrap them in a container element like div for the code to work:

<img width="380" alt="image" src="https://github.com/striver02/Namaste-React/assets/112791483/6a0a64f6-1c26-4331-9756-2d2718ba9856">


There is no problem with div containers if they serve a purpose like adding styles to the JSX. However, they are not always needed to wrap our JSX. In this case, when we do, they become extra nodes that clutter the DOM tree.
for that reason we use `<React.Fragment> <React.Fragment/>` or simply `<> </>`




