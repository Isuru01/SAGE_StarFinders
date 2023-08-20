import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import { Booking, Home, Search, Dashboard } from "../pages/index.mjs";
=======
import { BookingProvider } from "../context/BookingProvider";
import { Booking, Home, Search } from "../pages/index.mjs";
>>>>>>> Stashed changes
import "./App.css";
import Pay from "../pages/Pay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
<<<<<<< Updated upstream
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking/:sid/:class/:date" element={<Booking />} />
=======
        <Route path="/pay/:sid" element={<Pay />} />
        <Route
          path="/booking/:sid/:class/:date"
          element={
            <BookingProvider>
              <Booking />
            </BookingProvider>
          }
        />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
