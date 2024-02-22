 export function fitlerData(searchText,allRestaurants){
    const data=allRestaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return data;
}