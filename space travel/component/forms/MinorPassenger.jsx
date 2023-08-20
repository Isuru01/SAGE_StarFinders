import { useState, useContext } from "react";
import {
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { BookingProvider } from "../../context/BookingProvider";

const MinorPassenger = () => {
  const { passengers, setPassengers } = useContext(BookingProvider);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPassengers((prev) => [
      ...prev,
      {
        seat,
        
      },
    ]);
  };

  //   const [passenger, setPassenger] = useState({
  //     name: "",
  //     nationality: "",
  //     dob: "",
  //     GID: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setPassenger((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  return (
    <Box>
      <Typography color="primary" variant="h6">
        Children 1
      </Typography>
      <Stack spacing={2} sx={{ my: 1 }}>
        <TextField
          size="small"
          name="name"
          label="Passenger Name"
          value={passenger.name}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={passenger.nationality}
          label="Nationality"
        >
          <MenuItem value={"Mars"}>Ten</MenuItem>
          <MenuItem value={"Earth"}>Twenty</MenuItem>
          <MenuItem value={"Pluto"}>Thirty</MenuItem>
        </Select>

        <TextField
          size="small"
          name="GID"
          label="Galactic Loyalty ID"
          value={passenger.GID}
        />

        <Button>Save</Button>
      </Stack>
    </Box>
  );
};

export default MinorPassenger;
