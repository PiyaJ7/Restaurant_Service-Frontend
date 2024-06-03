import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RestaurantDetails() {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant/get-restaurantbyid/" + id)
      .then((restaurants) => {
        setRestaurantDetails(restaurants.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="homePage-section m-16">
      <div className="homePage-header">
        <p className="text-5xl font-bold text-balance">
          {restaurantDetails.name}
        </p>
      </div>
      <div className="homePage-body bg-gray-50 rounded-lg my-3 p-4">
        <p className="p-1 my-2">
          <b>Address:</b> {restaurantDetails.address}
        </p>
        <p className="p-1 my-2">
          <b>Telephone:</b> {restaurantDetails.telephone}
        </p>
        <div className="p-1">
          <button className="bg-green-700 py-1 px-2 mr-1 rounded-lg font-bold">
            Update
          </button>
          <button className="bg-red-700 py-1 px-2 ml-1 rounded-lg font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
