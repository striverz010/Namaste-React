import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { image_cdn } from "./config";
import { RestaurantCardsList } from "./config";



const Footer=()=>{
    return (

        <div className="footer">
            <h1>S T R I V E R</h1>

        </div>
        
    )
}




const App=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);