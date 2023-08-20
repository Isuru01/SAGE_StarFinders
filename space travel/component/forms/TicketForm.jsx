import React, { useState, useContext } from "react";
import { TextField, Stack, Box, Button } from "@mui/material";
import { BookingContext } from "../../context/BookingProvider";

const TicketForm = ({ onNext }) => {
  const { booking, setBooking } = useContext(BookingContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <Stack spacing={2}>
        <TextField
          size="small"
          name="adults"
          label="No of Adults"
          onChange={handleChange}
        />
        <TextField
          size="small"
          name="minors"
          label="No of Minors (under age of 3)"
          value={booking.minors}
          onChange={handleChange}
        />
      </Stack>

      <Box sx={{ mb: 2 }}>
        <div>
          <Button variant="contained" onClick={onNext} sx={{ mt: 1, mr: 1 }}>
            Continue
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default TicketForm;
