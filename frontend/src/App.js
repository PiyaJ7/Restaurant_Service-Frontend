import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RestaurantDetails from "./Pages/RestaurantDetails";
import CreateRestaurantPage from "./Pages/CreateRestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/restaurant-details/:id"
          element={<RestaurantDetails />}
        ></Route>
        <Route
          path="/create-restaurant"
          element={<CreateRestaurantPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
