import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_INFO_URL_BASE_PATH } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_INFO_URL_BASE_PATH + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
