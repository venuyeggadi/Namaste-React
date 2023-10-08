import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_INFO_URL_BASE_PATH } from "../utils/constants";

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_MENU_INFO_URL_BASE_PATH + resId);
    const json = await data.json();
    console.log(json);
    if (json.statusCode === 0) setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card?.card?.info;
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2]?.card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
