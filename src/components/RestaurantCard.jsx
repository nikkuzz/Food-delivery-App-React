import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import React from 'react';

const RestaurantCard = (props) => {

    const {resDetails} = props;  // 'resDetails' name should be same as prop attribute defined in below Body Comp.
  

    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating,sla} = resDetails?.info;
  
   const {LogginUser} = useContext(UserContext);
  
    return (
      <div className="res-card">
        <img alt="res-img" className="res-img" src={CDN_URL + cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}*</h4>
        <h4>{sla.deliveryTime}mins</h4>
        <h4>{LogginUser}</h4>
      </div>
    )
  }
  
export const withPopularLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Popular</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

  export default RestaurantCard;