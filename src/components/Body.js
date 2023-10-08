import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantsToShow(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantsToShow.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantsToShow.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
