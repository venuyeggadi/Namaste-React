import { useContext } from "react";
import React from "react";
import { SWIGGY_RESTAURANT_IMAGE_URL_BASE_PATH } from "../utils/constants";
import UserContext from "../utils/UserContext";

export default RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card m-2 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        src={`${SWIGGY_RESTAURANT_IMAGE_URL_BASE_PATH}${info.cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{info.name}</h3>
      <h4>{info.costForTwo}</h4>
      <p>{info.cuisines.join(", ")}</p>
      <h4>{info.avgRating} starts</h4>
      <p>{info.sla.deliveryTime} minutes</p>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
