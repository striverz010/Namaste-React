import { RestaurantCardsList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText,restaurants){
    return restaurants.filter((restaurant)=> restaurant.name.includes(searchText));
}

const Body=()=>{
     

     const [searchText,setSearchText]=useState("");
     const [restaurants,setRestaurants]=useState(RestaurantCardsList);

    return(
        <>
        <input 
        type="text" 
        className="search-bar" 
        placeholder="search" 
        value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}>
        </input>
        
        <button
         onClick={()=>{
            const data=filterData(searchText,restaurants);
            setRestaurants(data);
         }}
        >Search</button>
        
        
        <div className="body">
            {
                restaurants.map((card)=>{
                    return <RestaurantCard {...card} key={card.id}/>
                })
            } 
        </div>
        </>
    )
}
export default Body;