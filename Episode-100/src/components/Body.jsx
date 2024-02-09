import { RestaurantCardsList } from "../config";
import RestaurantCard from "./Restaurantcard";
import {useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI";


function fitlerData(searchText,allRestaurants){
    return allRestaurants.filter((restaurant)=>restaurant?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
}

const Body=()=>{

    const [searchText,setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);


   useEffect(()=>{
         getRestaurants();
   },[]);

    async function getRestaurants(){

    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    
    setAllRestaurants(json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log(json);
 
   }
   
   if(allRestaurants?.length===0) return <ShimmerUI/> 

   else{

    return(

        <>
        <input 
        className="search-bar"
        type="text" 
        placeholder="search" 
        value={searchText}

        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
        >
        </input>
        
        <button

        onClick={()=>{
            //filter the data

            const data=fitlerData(searchText,allRestaurants);

            setFilteredRestaurants(data);


        }}
        
        >Submit</button>

        
      
  
     <div className="body">
         {
            

             filteredRestaurants.map((restaurantcard)=>{
                 return <RestaurantCard {...restaurantcard.info}   key={restaurantcard.info.id}   />
                  
                     
             })
         }
     </div>
     </>

    )
 }
}


 export default Body;