import { Link } from "react-router-dom";
import RestaurantCard, { withPopularLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRes, setlistOfRes] = useState([]);

    const [searchtext, setsearchtext] = useState("");

    const [filteredRest, setfilteredRest] = useState([]);

    const PopularRestaurantCard = withPopularLabel(RestaurantCard);

    useEffect(() => {
        fetchedList();
    },[]);

    const fetchedList = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9431365&lng=77.6263452&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]);

    }


    const onlineStat = useOnlineStatus();

    if(onlineStat === "false") 
        return (
        <h1>Oopsss,Looks like you're Offline!! Please connect to a internet connection</h1>
        )
 

    return listOfRes?.length === 0 ? ( <Shimmer /> ) : (
     <div className="body">
        <div className="filtered">
         <div className="search mr-6">
            <input type="text" className="search-box border border-sky-500 rounded-sm p-1" value={searchtext} 
            onChange={(e) => {setsearchtext(e.target.value)}
            }>
            </input>
            <button className="bg-sky-200" onClick={() => {

                const searchedRes = listOfRes.filter((res) => 
                    res?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
                );

                setfilteredRest(searchedRes);

            }}>Search</button>
         </div>
     
     
      <button className="filtered-Res p-1 rounded-sm border border-sky-500"
      onClick={()=>{ 
            const filteredList = listOfRes.filter((res) => 
                                res.info.avgRating>4
      );
        setfilteredRest(filteredList);
    }}
      >
        Top Rated Restaurants
      </button>
      </div>

       <div className="res-container">
          {filteredRest.map((restaurant) => (
            
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
            
            {
            restaurant?.info?.avgRating >= 4.4 ? (<PopularRestaurantCard resDetails={restaurant} /> ) 
            
            : (<RestaurantCard resDetails={restaurant}/>  )
            
            }
            
            </Link>
        ))}
       </div>
    </div>
    )
  
  }

export default Body;
  