import Logo from "../assets/img/foodbuddy.png";


import { useState } from "react";
import {Link} from "react-router-dom";

const Header=()=>{

    const [logedIn,setLogedIn]=useState(true);


    
    return(

       

        <div className="header">
            <img  id="logo" src={Logo}></img>

            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
          
          {
            (logedIn? <button onClick={()=>{setLogedIn(false)}}> Login</button> : <button onClick={()=>{setLogedIn(true)}}>Logout</button>)
          }
           
            


           
        </div>
    )
}
export default Header;