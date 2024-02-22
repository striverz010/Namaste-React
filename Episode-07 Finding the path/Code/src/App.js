import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx";
import { img_cdn } from "./config.js";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";





const App=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>,
                childers:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resID",
                element:<RestaurantMenu/>
            }
           
           
        ]

    },

    

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)