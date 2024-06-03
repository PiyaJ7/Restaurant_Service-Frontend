import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function UpdateRestaurantPage({ id, closeUpdatePage }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant/get-restaurantbyid/" + id)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setTelephone(response.data.telephone);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdateRestaurant = (e) => {
    e.preventDefault();

    const updateData = {
      name: name,
      address: address,
      telephone: telephone,
    };

    axios
      .put("http://localhost:8000/restaurant/update/" + id, updateData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Restaurant update Successfully.");
          window.location.reload();
        } else {
          console.log("Server Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="updateRestaurant-page bg-zinc-300/[0.8] backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
      <div className="relative bg-gray-100 shadow-xl px-12 pt-4 pb-8 rounded-lg">
        <button
          onClick={() => closeUpdatePage(false)}
          className="absolute top-3 right-3 text-2xl text-zinc-400"
        >
          <IoClose />
        </button>
        <h1 className="text-3xl font-bold p-2 mb-4">
          Update Restaurant Details
        </h1>
        <form onSubmit={handleUpdateRestaurant}>
          <div className="my-4">
            <label htmlFor="">Name</label>
            <br />
            <input
              className="w-full rounded-lg outline-none p-1"
              type="text"
              value={name}
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
              value={address}
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
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <button className="bg-black hover:bg-zinc-800 active:bg-black text-white font-bold my-3 px-3 py-1 rounded-lg cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
