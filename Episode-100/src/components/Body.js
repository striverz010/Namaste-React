import RestaurantCard from "./RestaurantCard";
import { RestaurantCardsList } from "../config";
import {useState,useEffect} from "react";



function filterData(searchText,restaurants){

  const filterData=restaurants.filter((restaurant)=>restaurant.name.includes(searchText));
  return filterData;

}



const Body=()=>{

  //console.log("hai");


  const [searchText,setSearchText]=useState("");
  const [restaurants,setRestaurants]=useState(RestaurantCardsList);

 

   useEffect(()=>{
    //calling or fetching the API
    getRestaurants();
   })

   async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
  
      // Ensure that json.data.cards[0].card is an array
      const restaurantsArray = json.data.cards[0]?.card;
  
      setRestaurants(restaurantsArray);
      console.log(restaurantsArray);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

 
 




  

    return(


      <>
      <input
       type="text"
       placeholer="search"
       className="search-bar"
       value={searchText}

       onChange={(e)=>{
        setSearchText(e.target.value);
       }}>

      </input>

      <button
      onClick={()=>{
       const data= filterData(searchText,restaurants);
       setRestaurants(data);
      }}>search</button>

      

        <div className="body">
          {
            restaurants.map((Card)=>{
                return <RestaurantCard {...Card} key={Card.id}/>
               
                
            })
          }
        </div>
        </>
    )
}
export default Body;