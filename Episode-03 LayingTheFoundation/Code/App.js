import React from "react";
import ReactDOM from "react-dom/client";

//Creating Header Component using Function componet
const heading=<h1>React-App!</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
const LogoCreation=()=>{
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img  height="100px" width="100px" src="https://imgs.search.brave.com/kdhAvDDas6D9BZffTojqoSUyJxxDJW7VgITEc8id15Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/cmVhY3Quc3Zn.svg"></img>
            <input  type="text" placeholder="Search..." style={{ width: '200px', padding: '5px' }} />
            <img  height="100px" width="100px" src="https://imgs.search.brave.com/kdhAvDDas6D9BZffTojqoSUyJxxDJW7VgITEc8id15Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/cmVhY3Quc3Zn.svg"></img>
            </div>
    );
};
const HeaderComponent=()=>{
    return (
    <div>
        <LogoCreation/>
        <h1>React-App1</h1>
        <h2>React-App2</h2>
    </div>
    );
};
root.render(<HeaderComponent/>);