import React from "react";
import ReactDOM from "react-dom/client";

const h1=<h1>Namaste-React</h1>;

//Creating the Header Component
const HeaderComponent=()=>{

    return(
        <div className="Header">

         <a href="/"><img className="logo" src="https://play-lh.googleusercontent.com/iwGG0ojU1j43ZEEGiibNmLqd4Ha6eRtAjFlG2WE7uV8vUZTsrP1GDRwvA_aPJghkCqc=w480-h960-rw"></img> </a>

        <div className="nav-items">

            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul>

        </div>

        </div>
    );
};


//Creating the Body Components

const Cards=[

    {
        "id": "750592",
        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
          "text": "Biryani",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for biryani",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "750584",
        "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
          "text": "South Indian",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for south indian",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "750582",
        "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
          "text": "North Indian",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for north indian",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "750588",
        "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
          "text": "Chinese",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for chinese",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "762797",
        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
          "text": "Burgers",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for burger",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "750580",
        "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
          "text": "pizzas",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for pizza",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
        "frequencyCapping": {
          
        }
    },

    {
        "id": "750644",
        "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
          "text": "Idli",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for idly",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
        "frequencyCapping": {
          
        },
      
    }
]

const RestaruantCard=({id,imageId})=>{
    //const {id,text,imageId}=Card;
    return (
        <div className="card">

           {/* <img src={BurgerKing.image}></img>
           <h2>{BurgerKing.name}</h2>
           <h3>{BurgerKing.rating} stars </h3>
           <h5>{BurgerKing.cusines.join(" , ")}</h5> */}
           
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ imageId}></img>
           <h3>{id}</h3>
        </div>
    )
}
const BodyComponent=()=>{
    return (
        <div className="cards-list">
            {/* <RestaruantCard {...Cards[0]}/>
            <RestaruantCard {...Cards[1]}/>
            <RestaruantCard {...Cards[2]}/>
            <RestaruantCard {...Cards[3]}/>
            <RestaruantCard {...Cards[4]}/>
            <RestaruantCard {...Cards[5]}/>
            <RestaruantCard {...Cards[0]}/>
            <RestaruantCard {...Cards[1]}/>
            <RestaruantCard {...Cards[3]}/>
            <RestaruantCard {...Cards[2]}/> */}

            {
                Cards.map((card)=>{

                    return <RestaruantCard {...card} key={card.id}/>
                })
            }
            
            
        </div>
    )
}

const FooterComponent=()=>{
    return (
        <h1>Footer</h1>
    )
}













const AppLayout=()=>{
   return (
    <>
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </>
   )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);



