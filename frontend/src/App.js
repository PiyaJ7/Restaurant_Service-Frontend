import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RestaurantDetails from "./Pages/RestaurantDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/restaurant-details/:id"
          element={<RestaurantDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
