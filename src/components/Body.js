import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsToShow, setRestaurantsToShow] = useState(restaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () =>
    setRestaurantsToShow(
      restaurants.filter((restaurant) => restaurant.info.avgRating >= 4)
    );

  const handleSearch = (searchText) => {
    setRestaurantsToShow(
      restaurants.filter((r) =>
        r.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4417675&lng=78.360756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantsToShow(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? []
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            className="search-bar border border-solid border-black"
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="filter-btn px-4 py-1 mx-5 bg-gray-100 rounded-lg"
            onClick={handleFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {restaurantsToShow.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container flex flex-wrap">
          {restaurantsToShow.map((restaurant) => (
            <Link
              className="restaurant-card-link"
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
