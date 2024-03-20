import React from "react";
import { SWIGGY_RESTAURANT_IMAGE_URL_BASE_PATH } from "../utils/constants";

export default RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
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
    </div>
  );
};
