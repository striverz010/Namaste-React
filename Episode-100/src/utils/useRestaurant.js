import {useState,useEffect } from "react";
import { RESTAURANT_MENU_API } from "../config";

const useRestaurant=(resID)=>{
    const [restaurantMenu,setRestaurantMenu]=useState(null);


    useEffect(()=>{

        getRestaurantMenuInfo();
    },[]);

    
    async function getRestaurantMenuInfo(){
        const data=await fetch(RESTAURANT_MENU_API+resID);
        const json=await data.json();
        const MenuData=json?.data?.cards[2]?.card?.card?.info;
        
        setRestaurantMenu(MenuData);
    }
    return restaurantMenu;   
}
export default useRestaurant;