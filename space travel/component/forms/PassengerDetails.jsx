import { useState, useContext } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

import { BookingContext } from "../../context/BookingProvider";
import { fetchSeatMap } from "../../api/seats.api.mjs";
import { useQuery } from "@tanstack/react-query";
import AdultPassenger from "./AdultPassenger";
import MinorPassenger from "./MinorPassenger";

const PassengerDetails = ({ onBack, onNext }) => {
  const [nationality, setNationality] = useState("");

  const { selected, setSelected, booking } = useContext(BookingContext);

  console.log(selected);

  return (
    <Box>
      <hr style={{ margin: "25px 0" }} />

      <Box>
        {/* {selected.forEach((element) => {
          return <PassengerDetails />;
        })} */}
        {selected.map((seat) => (
          <AdultPassenger seat={seat.seat} />
        ))}
      </Box>

      <Box sx={{ mb: 2, display: "flex" }}>
        <Button onClick={onBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={onNext} sx={{ mt: 1, mr: 1 }}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default PassengerDetails;
