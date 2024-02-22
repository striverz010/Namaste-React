import {useState,useEffect} from "react";

const useOnline=()=>{

    const[isOnline,setIsOnline]=useState(true);

    useEffect(()=>{

        const handleOnline=()=>{
            setIsOnline(true);
        }
        const handleOffline=()=>{
            setIsOnline(false);
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{ 
            //removing the addEventListiners for removing the cache of the appv                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);

        }
    },[]);

    return isOnline;

}

export default useOnline;