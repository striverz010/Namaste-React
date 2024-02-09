import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx";
import { img_cdn } from "./config.js";




const App=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);