# `Let's get Hooked!`
# 1)What is the difference between `Named export`, `Default export`?
The export statement plays a crucial role in this system, enabling the exposure of variables, functions, or classes from one module to another. There are primarily two types of exports: Named Exports and Default Exports.
## Named export:
```
// module.js
export const myVariable = 42;
export function myFunction() {
  // function code here
}

```
In another file, you can import the named exports like this:
```
// otherModule.js
import { myVariable, myFunction } from './module';

```

## Default export:
```
// module.js
const myVariable = 42;
export default myVariable;

```
In another file, you can import the default export like this:

``` // otherModule.js
import myVariable from './module';
```
# What is the importance of `config.js` file?
In a React application, the config.js file, or a similarly named configuration file, is not inherently crucial or standard. However, developers often use configuration files to manage various settings and environment-specific parameters. The importance of a configuration file, whether named config.js or otherwise, lies in its ability to centralize and manage configuration settings for a React application.

# What are `React Hooks`?
<img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png"></img>
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

React provides a bunch of standard in-built hooks:

* `useState`: To manage states. Returns a stateful value and an updater function to update it.
* `useEffect`: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
* `useContext`: To return the current value for a context.
* `useReducer`: A useState alternative to help with complex state management.
* `useCallback`: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
* `useMemo`: It returns a memoized value that helps in performance optimizations.
* `useRef`: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
* `useLayoutEffect`: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
* `useDebugValue`: Helps to display a label in React DevTools for custom hooks.

# Why do we need `useState Hook`?
The React `useState` Hook used to create the state variables.
``` const [state, setState] = useState(initialValue); ```
Multiple State Variables: With useState, you can declare and manage multiple state variables within a single functional component, making it easy to organize and update different aspects of the component's state.

```
import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* ... rest of the form */}
    </form>
  );
}
```



