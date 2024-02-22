import { RestaurantCardsList } from "../config";
import RestaurantCard from "./Restaurantcard";
import {useEffect, useState} from "react";
import ShimmerUI from "./ShimmerUI";
import {Link} from "react-router-dom";
import {fitlerData} from "../utils/helper";
import { RESTAURANT_API } from "../config";
import useOnline from "../utils/useOnline";




const Body=()=>{

    const [searchText,setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);


   useEffect(()=>{
         getRestaurants();
   },[]);

    async function getRestaurants(){

    const data=await fetch(RESTAURANT_API);
    const json=await data.json();
    
    setAllRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);


    
 
   }

   const isOnline =useOnline();
   if(!isOnline) return <h1> 🔴 Your are offline check your internet connection</h1>
   
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
            console.log(data);
            console.log(filteredRestaurants);
           
           if(data.length===0) return <h1>No Items Found</h1>;
            


        }}
        
        >Submit</button>

        
      
  
     <div className="body">
         {

             filteredRestaurants.map((restaurantcard)=>{
                 return (
                <Link to={"restaurants/"+restaurantcard.info.id} key={restaurantcard.info.id}>
                        
                        <RestaurantCard {...restaurantcard.info} />
                 </Link>
                 )
                  
                     
             })
            
         }
     </div>
     </>

    )
 }
}


 export default Body;