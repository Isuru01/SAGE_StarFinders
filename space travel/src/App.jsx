import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Booking, Home, Search, Dashboard, SignIn } from "../pages/index.mjs";
import { BookingProvider } from "../context/BookingProvider";
import "./App.css";
import Pay from "../pages/Pay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/pay/:sid" element={<Pay />} />
        <Route
          path="/booking/:sid/:class/:date"
          element={
            <BookingProvider>
              <Booking />
            </BookingProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
