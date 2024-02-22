
const ShimmerUI=()=>{
    return (
        <div className="body">

            {Array(8).fill("").map((e,index)=>(

                <div  key={index} className="shimmer-cards"></div>
                
            ))} 
        </div>
    )
}
export default ShimmerUI;