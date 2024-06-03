import axios from "axios";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateRestaurantPage({ closeCreateRestaurant }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleCreateRestaurant = (e) => {
    e.preventDefault();

    const restaurantData = {
      name: name,
      address: address,
      telephone: telephone,
    };

    axios
      .post("http://localhost:8000/restaurant/create", restaurantData)
      .then((response) => {
        if (response.status === 201) {
          console.log("Restaurant created successfull");
          window.location.reload();
        } else {
          console.log("Restaurant created unsuccessfull");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createRestaurant-page bg-zinc-300/[0.8] backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
      <div className="create-body relative bg-gray-100 shadow-xl px-12 pt-4 pb-8 rounded-lg">
        <button
          onClick={() => closeCreateRestaurant(false)}
          className="absolute top-3 right-3 text-2xl text-zinc-400"
        >
          <IoClose />
        </button>
        <h1 className="text-3xl font-bold p-2 mb-4">Create New Restaurant</h1>
        <form onSubmit={handleCreateRestaurant}>
          <div className="my-4">
            <label htmlFor="">Name</label>
            <br />
            <input
              className="w-full rounded-lg outline-none p-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="">Address</label>
            <br />
            <input
              className="w-full rounded-lg outline-none p-1"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="">Telephone No</label>
            <br />
            <input
              className="w-full rounded-lg outline-none p-1"
              type="text"
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <button className="bg-black hover:bg-zinc-800 active:bg-black text-white font-bold my-3 px-3 py-1 rounded-lg cursor-pointer">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
