# `LayingTheFoundation`

## Q: What is `JSX`?
JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.
* JSX is a HTML like syntax but not HTML inside javascript.
```
const jsx = <h1>This is JSX</h1>
```
This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.
So to convert it to browser understandable JavaScript code, we use a tool like Babel which is a JavaScript compiler/transpiler.
* The babel configuration is comes along with the `parcle`.
```
const heading=<h1>Hello World!</h1>      ==> babel ==>  const heading = /*#__PURE__*/_jsx("h1", {  children: "Hello World!" });

```
### babel compiler:
<a href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBAFgUwIYBMCWYDmBeAPHARgD4AJBAG3JBgHUQAnclAQlwHpCig&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.23.2&externalPlugins=&assumptions=%7B%7D">Compiler <a/>

## Benifits of `JSX`?

* Readability
* JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
* JSX also allows React to show more useful error and warning messages.
* If one is familiar with HTML, it is quite easy to use JSX when building React application
* Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

## JSX vs React.createElement();
JSX is a syntax extension for JavaScript that allows developers to write HTML-like code directly in their JavaScript files. It's a more concise way of creating React elements than using `React.createElement()`.
One of the key differences between JSX and `React.createElement()` is that JSX lets you write your HTML-like code directly in your JavaScript file. On the other hand, with `React.createElement()`, you need to pass the element type, props, and children as separate arguments.
```
* React.createElement()
  const element = React.createElement('div', { className: 'my-class' }, 'Hello World!');


* JSX
  const element = <div className="my-class">Hello World!</div>;
```

## Behind the scnes of `JSX`?
* JSX --> React.createElement() -->Object() -->HTML(DOM)
<img src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*N8qOcrpBo5K1YD2emLPQcg.png">

## `Babel` and `parcel` role in JSX
Babel is a JavaScript compiler, and Parcel is a JavaScript bundler.
Babel is used to convert modern JavaScript syntax (ES6 and beyond) into older JavaScript that can be run in most browsers. Babel can also be used to convert JSX syntax into JavaScript.
Parcel is used to bundle JavaScript files into a single file that can be easily loaded into a web browser. Parcel can also be used to bundle other assets, such as images, CSS, and fonts.

## Components --Everything is component in React.
The components are divided into two types
* functional components (new way of writing) :functional components are nothing but functions.
* classbased components (old way of writing)

### Things about components
* Everything is component in react
* component inside a component is called `component composition`
* putting element in component `{heading}`
* putting component in component `{Title()}` or `<Title/>`
* `{}` -->you can write any javascript code in this prop






