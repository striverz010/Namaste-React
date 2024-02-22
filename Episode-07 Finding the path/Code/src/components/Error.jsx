import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err=useRouteError();
    //console.log(err);
    return(
        <div>
            <h1>OOPS!</h1>
            <h2>Something went Wrong..!</h2>
            <h2>{err.status}</h2>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;