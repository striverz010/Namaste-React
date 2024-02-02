import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body"
import { img_cdn } from "./config";
import { RestaurantCardsList } from "./config";
import RestaurantCard from "./components/RestaurantCard";











const App=()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);   




















