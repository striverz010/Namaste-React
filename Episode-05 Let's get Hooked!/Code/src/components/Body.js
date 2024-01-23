import RestaurantCard from "./RestaurantCard";
import { RestaurantCardsList } from "../config";
import {useState} from "react";



function filterData(searchText,restaurants){

  const filterData=restaurants.filter((restaurant)=>restaurant.name.includes(searchText));
  return filterData;

}

const Body=()=>{


 // const [click,setClick]=useState("");
  const [searchText,setSearchText]=useState("");
  const [restaurants,setRestaurants]=useState(RestaurantCardsList);

  

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

      {/* Toogling the bits...
      <h1>{click}</h1>
      <button onClick={()=>{

        if(click==="false"){
          setClick("true")

        }
        else{
          setClick("false");
        }
      }}> search</button> */}

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