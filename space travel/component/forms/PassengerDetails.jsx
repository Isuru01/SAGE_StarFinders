import { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const PassengerDetails = () => {
  const [nationality, setNationality] = useState("");

  return (
    <Box>
      <Typography color="primary" variant="h6">
        Adult Passenger 1
      </Typography>
      <Stack spacing={2} sx={{ my: 1 }}>
        <TextField size="small" name="name" label="Passenger Name" />
        <TextField size="small" name="passport" label="Galactic Passport" />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={nationality}
          label="Nationality"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <TextField size="small" name="loyalty" label="Galactic Loyalty ID" />
        <TextField size="small" name="contact" label="Contact" />
      </Stack>

      <hr style={{ margin: "25px 0" }} />

      <Typography color="primary" variant="h6">
        Children 1
      </Typography>
      <Stack spacing={2} sx={{ my: 1 }}>
        <TextField size="small" name="name" label="Children Name" />
        <TextField size="small" name="passport" label="Galactic Passport" />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={nationality}
          label="Nationality"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <TextField size="small" name="parent" label="Parent Name" />
      </Stack>
    </Box>
  );
};

export default PassengerDetails;
