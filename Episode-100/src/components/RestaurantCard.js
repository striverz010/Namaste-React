import { image_cdn } from "../config";

const RestaurantCard=({cloudinaryImageId,name,avgRating,cuisines})=>{
    return(
        <div className="restaurant-card">
            <img src={image_cdn+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h2>{avgRating}</h2>
            <h6>{cuisines.join(", ")}</h6>

        </div>
    )
}
export default  RestaurantCard;