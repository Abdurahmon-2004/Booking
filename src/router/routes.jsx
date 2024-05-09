//pages
import Attractions from "../pages/Attractions";
import Restaruants from "../pages/Restaruants";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";
import Home from "../pages/Home";
//react router dom
import { Routes, Route } from "react-router-dom";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaruants" element={<Restaruants />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}
