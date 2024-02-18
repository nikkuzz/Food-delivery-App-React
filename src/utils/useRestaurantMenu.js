import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchMenu = async () => {

        const data = await fetch(MENU_URL + resId)

        const jsonData = await data.json();

        setresInfo(jsonData.data);
    };

    return resInfo;

};

export default useRestaurantMenu;