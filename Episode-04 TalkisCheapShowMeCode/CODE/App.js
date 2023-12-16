import React from "react";
import ReactDOM from "react-dom/client";




const Logo=()=>{
    return (
        <div >
        <a href="/">
        <img className="logo" src="https://play-lh.googleusercontent.com/iwGG0ojU1j43ZEEGiibNmLqd4Ha6eRtAjFlG2WE7uV8vUZTsrP1GDRwvA_aPJghkCqc"></img>
        </a>
        </div>
    )
}
const NavItems=()=>{
    return (
        <div className="nav-items">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>CART</li>
            </ul>
        </div>
    );
};
const HeaderComponent=()=>{
    return(
        <div className="header">
        <Logo/>
        <NavItems/>
        </div>

    );
};

//creating the restarun card dynamically

const Card=[
    {
        "id": "1558796",
        "imageId": "rng/md/carousel/production/99e197d26d8936c3f8c4fe959260ddee",
        "action": {
          "link": "https://www.swiggy.com/menu/419707",
          "text": "KFC",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "40%",
          "altTextCta": "Order Now"
        },
        "entityId": "419707",
        "frequencyCapping": {
          
        }
      },
      {
        "id": "1539059",
        "imageId": "rng/md/carousel/production/7c92c3744ea5da6c0204cb8ec2918410",
        "action": {
          "link": "https://www.swiggy.com/collections/99942?collection_id=99942&type=rcv2",
          "text": "Gourmet LN/DN",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "GOURMET lunch",
          "altTextCta": "Order now"
        },
        "entityId": "swiggy://collectionV2?collection_id=99942",
        "frequencyCapping": {
          
        }
      },
      {
        "id": "1558780",
        "imageId": "rng/md/carousel/production/e977201fae429ad3f2fd03961b89fd8f",
        "action": {
          "link": "https://www.swiggy.com/menu/28768",
          "text": "Domino",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Domino's Pizza",
          "altTextCta": "Order Now"
        },
        "entityId": "28768",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      },
      {
        "id": "1558762",
        "imageId": "rng/md/carousel/production/c6ecfbe96b4dc6ce6cbe6fcdbe7ab2ae",
        "action": {
          "link": "https://www.swiggy.com/menu/408177",
          "text": "pizza hut",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "pizza hut",
          "altTextCta": "Order Now"
        },
        "entityId": "408177",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      },
      {
        "id": "1524700",
        "imageId": "rng/md/carousel/production/be54de8e4f1abd222adb3722433fe66e",
        "action": {
          "link": "swiggy://fusion-landing?id=theCokepage&show_location=true",
          "text": "Coke",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "Coke",
          "altTextCta": "Order Now"
        },
        "entityId": "swiggy://fusion-landing?id=theCokepage&show_location=true",
        "frequencyCapping": {
          
        },
        "isManualAds": true
      }
];
    

const RestarantCard=({res})=>{

   // console.log(props);

   const {text,imageId}=res;

    return (
        <div className="card">
            


            

 <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +imageId

        }></img>

            <h1>{text}</h1>
            
        </div>
    )
}



const Body=()=>{
    return (
        <div className="body-item">
          <RestarantCard res={Card[0]}/> 
          <RestarantCard res={Card[1]}/> 
          <RestarantCard res={Card[2]}/> 
          <RestarantCard res={Card[3]}/> 
          <RestarantCard res={Card[4]}/> 
          <RestarantCard/> 
          <RestarantCard/> 
          <RestarantCard/> 
          <RestarantCard/> 
          <RestarantCard/> 
        </div>
    )
}

const Footer=()=>{
    return (
        <h3>FOOTER</h3>
    )
}

const AppLayout=()=>{
    return (
        <>
        <HeaderComponent/>
        <Body/>
        <Footer/>
        </>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);







