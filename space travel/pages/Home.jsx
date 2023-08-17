import React from "react";
import Destination from "../component/cards/Destination";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Box>
        <Destination />
        <Destination />
        <Destination />
      </Box>
    </div>
  );
};

export default Home;
