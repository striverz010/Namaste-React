# `Episode-04 Talk is cheap show me the Code`

## Q) Is `JSX` mandatory for react?
Yes, `JSX is not mandatory for using React`.Using React without JSX is convenient when we set up bigger projects. JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React.
Take a look at the below code:
```
const start = <h1> Here it comes, JSX </h1>
```
Although this is a simple JSX in React, the browser does not recognize it since it is not genuine Javascript code. That's why an HTML tag is applied to a variable that isn't a string but rather HTML code. So we utilize a tool like Babel, a JavaScript compiler/transpiler, to turn it into browser-friendly JavaScript code.

## Q) Is `ES6` mandatory for React?
No, ES6 (ECMAScript 2015) is not mandatory for React, but it is highly recommended. React itself is a JavaScript library, and you can use it with any version of JavaScript, including ES5. However, using ES6 and its subsequent versions brings several advantages and features that make the development process more convenient and efficient.

ES6 introduces a variety of syntax improvements and new features, such as arrow functions, classes, destructuring assignment, let and const declarations, template literals, and more. Many of these features can enhance the readability and maintainability of your React code.

Moreover, some React features, like the use of JSX (JavaScript XML), are more commonly associated with ES6 and later versions. JSX is a syntax extension that allows you to write XML/HTML-like code within your JavaScript, making it easier to define React components.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
### {TitleComponent}:
Placing the react element inside the react component this syntax is used
```
const MyComponent = () => {
  const TitleComponent = <h1>Hello, World!</h1>;

  return (
    <div>
      {TitleComponent}
      {/* Other JSX elements */}
    </div>
  );
};
```


## {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}:

The both the components are used to place the components inside the components


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

# What is `Reconciliation` in React?
* <a href="https://legacy.reactjs.org/docs/reconciliation.html">Reconciliation</a><br>
* <a href="https://youtu.be/thsUZEzL8ts?si=fMO2w7lFGV1dMYGo">Vidoe about reconciliation</a>

# What is `React Fiber`?
it is a reimplementation of older versions of the React reconciler.
* <a href="https://sunnychopper.medium.com/what-is-react-fiber-and-how-it-helps-you-build-a-high-performing-react-applications-57bceb706ff3">React Fiber</a>

# Can we use index as keys in React?
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--jpe9LlUf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8pnq9wjbkq4ejlyf8bva.gif"></img>

* <a href="https://kuldipem.medium.com/say-no-to-array-index-as-key-in-react-my-approaches-to-tackle-it-that-you-can-use-51153bfa8901"></a>

# What is `props` in React?
``` function ReactComponent(props) {} ```
The props argument is an argument that React passes to its Components when they are being rendered(and updated too). The name is not just to be props, it can be anything. I was following naming conventions, the props name tells us it's a prop/property passed to the Component.

So, the "attributes" passed to the ReactComponent can be accessed as properties in the props argument. As we said before the props argument is an object.
```
function ReactComponent(props) {
  typeof props; // "object"
  return null;
}
```

Now, we can access the data1 and data2 in the props

```
function ReactComponent(props) {
  const data1 = props.data1;
  const data2 = props.data2;
  return null;
}
```

# What is `Config Driven UI`?
A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded. The configuration file or data structure typically contains information about the structure of the UI, such as the layout of the elements, the properties and behaviors of each element, and any data sources or APIs that the UI interacts with.

Using a config-driven UI approach, the UI can be easily modified and customized without requiring changes to the underlying codebase. This makes it easier to maintain, extend, and scale the UI, and also allows for more rapid development and iteration.






