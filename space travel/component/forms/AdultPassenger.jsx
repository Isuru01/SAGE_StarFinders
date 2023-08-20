import { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { BookingContext } from "../../context/BookingProvider";

const AdultPassenger = ({ seat }) => {
  const { passengers, setPassengers } = useContext(BookingContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPassengers((prev) => {
      const passengerIndex = prev.findIndex((p) => p.seat === seat);
      if (passengerIndex !== -1) {
        // Update existing passenger object
        return prev.map((p, i) =>
          i === passengerIndex ? { ...p, [name]: value } : p
        );
      } else {
        // Add new passenger object
        return [...prev, { seat, [name]: value }];
      }
    });
  };

  console.log(passengers);

  return (
    <Box>
      <Typography color="primary" variant="h6">
        Passenger (Adult) SeatNo: {seat}
      </Typography>
      <Stack spacing={2} sx={{ my: 1 }}>
        <TextField
          size="small"
          name="name"
          onChange={handleChange}
          label="Passenger Name"
          value={passengers.name}
        />

        <Select
          name="nationality"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          onChange={handleChange}
          value={passengers.nationality}
          label="Nationality"
        >
          <MenuItem value={"Mars"}>Mars</MenuItem>
          <MenuItem value={"Earth"}>Earth</MenuItem>
          <MenuItem value={"Pluto"}>Pluto</MenuItem>
        </Select>

        <TextField
          size="small"
          name="GID"
          onChange={handleChange}
          label="Galactic Loyalty ID"
          value={passengers.GID}
        />
      </Stack>
    </Box>
  );
};

export default AdultPassenger;
