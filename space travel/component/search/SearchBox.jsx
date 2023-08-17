import React from "react";
import { Box, Stack, TextField, Autocomplete, Button } from "@mui/material";

const top100Films = [];

const SearchBox = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Autocomplete
          size="small"
          id="free-solo-demo"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField {...params} label="Choose start locaton" />
          )}
        />
        <Autocomplete
          id="free-solo-demo"
          size="small"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField {...params} label="Choose your destination" />
          )}
        />
        <Button size="small" variant="contained">
          Let's go
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBox;
