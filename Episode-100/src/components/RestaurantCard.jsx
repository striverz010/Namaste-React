import { img_cdn } from "../config";


const RestaurantCard=({cloudinaryImageId,name,avgRating,cuisines})=>{
    return(
        <div className="resturant-card">


            <img src={img_cdn+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h5>{cuisines.join(", ")}</h5>


        </div>
    )
}

export default RestaurantCard;