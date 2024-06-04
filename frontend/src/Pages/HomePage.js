import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateRestaurantPage from "./CreateRestaurantPage";

export default function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const [openCreateRestaurant, setOpenCreateRestaurant] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant/get-restaurants")
      .then((restaurants) => {
        setRestaurants(restaurants.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homePage-section m-16">
      <div className="homePage-header flex justify-between flex-wrap">
        <p className="text-5xl font-bold my-2">Restaurants List</p>
        <button
          onClick={() => setOpenCreateRestaurant(true)}
          className="bg-black text-white font-bold my-3 px-3 py-1 rounded-lg cursor-pointer"
        >
          Create new Restaurant
        </button>
        {openCreateRestaurant && (
          <CreateRestaurantPage
            closeCreateRestaurant={setOpenCreateRestaurant}
          />
        )}
      </div>
      <div className="homePage-body">
        {restaurants
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((restaurant) => (
            <Link to={`/restaurant-details/${restaurant._id}`}>
              <div className="bg-gray-50 rounded-lg my-3 p-4">
                {restaurant.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
