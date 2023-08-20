import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    uid: "",
    adults: 0,
    minors: 0,
  });

  const [selected, setSelected] = useState([]);
  const [passengers, setPassengers] = useState([]);

  const bookingValue = {
    booking,
    setBooking,
    selected,
    setSelected,
    passengers,
    setPassengers,
  };

  return (
    <BookingContext.Provider value={bookingValue}>
      {children}
    </BookingContext.Provider>
  );
};
