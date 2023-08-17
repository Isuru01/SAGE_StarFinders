import React from "react";
import { Box, Stack } from "@mui/material";
import ShuttleCard from "../cards/ShuttleCard";

const SearchResults = () => {
  return (
    <Stack>
      <ShuttleCard />
      <ShuttleCard />
      <ShuttleCard />
      <ShuttleCard />
    </Stack>
  );
};

export default SearchResults;
