import React, { useState } from "react";
import { TextField, Box, Stack } from "@mui/material";

const TicketForm = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  return (
    <Box>
      <form>
        <Stack spacing={2}>
          <TextField
            size="small"
            name="adults"
            label="No of Adults"
            type="number"
            value={adults}
            onChange={handleAdultsChange}
          />
          <TextField
            size="small"
            name="childs"
            label="No of Children"
            type="number"
            value={children}
            onChange={handleChildrenChange}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default TicketForm;
