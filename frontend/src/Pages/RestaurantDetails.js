import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateRestaurantPage from "./UpdateRestaurantPage";

export default function RestaurantDetails() {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const { id } = useParams();
  const [openUpdatePage, setOpenUpdatePage] = useState(false);
  const navigate = useNavigate();

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

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${restaurantDetails.name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/restaurant/delete/" + id)
        .then((response) => {
          if (response.status === 200) {
            console.log("Restaurant details deleted Succesfully");
            navigate(-1);
          }
        })
        .catch((err) => console.log(err));
    }
  };

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
          <button
            onClick={() => setOpenUpdatePage(true)}
            className="bg-green-700 py-1 px-2 mr-1 rounded-lg font-bold"
          >
            Update
          </button>
          {openUpdatePage && (
            <UpdateRestaurantPage
              id={restaurantDetails._id}
              closeUpdatePage={setOpenUpdatePage}
            />
          )}
          <button
            onClick={handleDelete}
            className="bg-red-700 py-1 px-2 ml-1 rounded-lg font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
