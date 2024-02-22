import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import {img_cdn} from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu=()=>{
    const {resID}=useParams();

    const[restaurantMenu,setRestaurantMenu]=useState(null);
    
    useEffect(()=>{

        getRestaurantMenuInfo();

    },[]);

    async function getRestaurantMenuInfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId="+resID);
        const json=await data.json();
        const RestaurantMenu=json?.data?.cards[2]?.card?.card?.info;
        console.log(RestaurantMenu);
        setRestaurantMenu(RestaurantMenu);
        
    }
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