import {Outlet} from "react-router-dom";


const About=()=>{
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste react About...🚀</h2>
            <Outlet/>
            {/* or we can simply use the profile component as well by simply importing the profile componet to this module */}
        </div>
    )
}

export default About;
