import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import {img_cdn} from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu=()=>{
    
    const {resID}=useParams();
    const restaurantMenu=useRestaurant(resID);

    
    
    if(!restaurantMenu) return <ShimmerUI/>;

    return(
        <div className="restaurant-menu">
            <div className="restaurant-menu-items">
            <img src={img_cdn+restaurantMenu?.cloudinaryImageId}/>
            <ul>
                <li>{restaurantMenu.name}</li>
                <li>{restaurantMenu.id}</li>
                <li>{restaurantMenu.city}</li>
                <li>{restaurantMenu.avgRating}</li>
            </ul>
                
            </div>
            
           
           
           
           
        </div>
    )
}
export default RestaurantMenu;