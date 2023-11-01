import React from "react";
import ReactDOM from "react-dom/client";

const heading= <h1 id="title" key="1"> React-App</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const HeaderComponent=()=>{

    ( <div>
        <h1>React-App1</h1>
        <h2>React-App2</h2>
    </div> );  
};
root.render(<HeaderComponent/>);




// using react element in functions componenet

// const heading1=<h1>React-Heading</h1>;

// const HeaderComponent1=()=>{
//     <div>
//         {heading1}
//         <h1>React-App1</h1>
//         <h2>React-App2</h2>
//     </div>
// }




//using react component insider the react componet

// const Title=()=>{
//     console.log("Namaste-React");
// }

// const HeaderComponent2=()=>{
//     ( <div>
//         <Title/> or {Title()}
//         <h1>React-App</h1>
//         <h2>React-App2</h2>
//     </div> 

//     );
// }