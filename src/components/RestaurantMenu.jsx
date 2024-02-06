import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setshowIndex] = useState(null);

  
    if (resInfo === null) 
        return <Shimmer />; 


    const {name,cuisines,costForTwo,avgRating} = resInfo?.cards[0]?.card?.card?.info;

//    const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    
 const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)

// console.log(categories)
 
   return ( 
   
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}*</h3>
            <h3>Rs. {costForTwo/100} Cost for two</h3>
            <h2 className="font-bold text-xl italic mt-2">Menu</h2>

            {categories.map((categroy,index) => 
                //controlled component
                <RestaurantCategory 
                key={categroy?.card?.card?.title}
                data = {categroy?.card?.card}
                dropdown={index === showIndex}
                setshowIndex={() => setshowIndex(index)}/>    
        )}
            
        </div>
   )
};




export default RestaurantMenu;