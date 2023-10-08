import React from "react";
import { SWIGGY_RESTAURANT_IMAGE_URL_BASE_PATH } from "../utils/constants";

export default RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${SWIGGY_RESTAURANT_IMAGE_URL_BASE_PATH}${info.cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{info.name}</h3>
      <h4>{info.costForTwo}</h4>
      <p>{info.cuisines.join(", ")}</p>
      <h4>{info.avgRating} starts</h4>
      <p>{info.sla.deliveryTime} minutes</p>
    </div>
  );
};
