# `Inception`

## Q: What is `Emmet`?
   A: Emmet is a plugin for many popular text editors which greatly improves the workflow of HTML and CSS.
   ### Creating HTML structure:
   * Input: `nav>ul>li*3>a`
   * output:
   ```
<nav>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</nav>

 ```
## Q: What is `Libray` and `Framework`?
### Library:
A library is a collection of pre-written code or software components that provide specific functionality.

<img  height="250px" width="900px" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VY_o_08nq3YRylQLza5EDg.png">

### Framework:
A framework is a more comprehensive and structured set of pre-designed code that provides a foundation for building software applications.

<img  height="250px" width="900px" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ij6jDTgS5_ldFZbsOfBYDg.png">

# Q: What is `CDN`?
CDN stands for `Content Delivery Network` which is a network of servers distributed across different geographic locations around the world. The primary purpose of a CDN is to improve the performance, reliability, and availability of web content.
      
# Q: why is `React Know as React`?
React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.

# Q: what is `cross-orgin`?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
# Q: What is the difference between `React` and `ReactDOM` ?
`React` provides the core functionality for building UI components, `React-DOM` specifically focuses on rendering these components in the DOM environment, making them interact with the actual webpage.
* `React` responsible for creating components,elements,classes(React.createElement())
* `React-DOM` responsible for Rendering react elements to the DOM(ReactDOM.render())

# Q: what is difference between `react.development.js` and `react.production.js` files via cdn?
### react.development.js:
   This file (react.development.js) is intended for use during development. It contains various developer-friendly tools, warnings, and error messages that are helpful for 
   debugging and identifying potential issues in your React code. It's larger in size compared to the production version.
### react.production.js:
   When you are ready to deploy your application, you should use react.production.js. This will ensure that your application is running as fast,which means comments, 
   whitespace, and unnecessary code have been removed to reduce the file size. This smaller file size helps in faster downloads and improved performance in the production 
   environment.
* Hence during the development we use `react.development.j`s for error warnings for debugging and during production we use `react.production.js` for optimization and high 
b performance.
# Q: What is async and defer?

   
