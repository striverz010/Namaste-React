import { RestaurantCardsList } from "../config";
import RestaurantCard from "./Restaurantcard";
import {useState} from "react";


function fitlerData(searchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant.name.includes(searchText));
}

const Body=()=>{

    const [searchText,setSearchText]=useState("");
    const [restaurants,setRestaurants]=useState(RestaurantCardsList);
    
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

            const data=fitlerData(searchText,restaurants);
            setRestaurants(data);
        }}
        >Submit</button>

        

       
     <div className="body">


 
         {
             restaurants.map((restaurantcard)=>{
                 return <RestaurantCard {...restaurantcard} key={restaurantcard.id}/>
             })
         }
     </div>
     </>
    )
 }

 export default Body;