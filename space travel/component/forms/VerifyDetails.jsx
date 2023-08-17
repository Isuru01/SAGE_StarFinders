import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";

const VerifyDetails = () => {
  const seats = ["1LW", "1LA", "2RW"];

  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        background: `url("https://th.bing.com/th/id/OIP.AB03wwBKLQIzLa5KGxFmegHaFS?pid=ImgDet&w=640&h=457&rs=1")`,
        backgroundSize: "cover",
        color: "#FFFFFF",
        borderRadius: "4px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: "500" }}>
            Passenger Details
          </Typography>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <RocketIcon />
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              Flight No MS4311
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              Depature on <br /> 23 Jun 21h 00min
            </Typography>
            <Chip label="Earth LX" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              Arrival on <br /> 24 Jun 23 21h 00min
            </Typography>
            <Chip label="Mars KD" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              No of Adults 3
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              No of Children 1
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              Selected Seats
            </Typography>
            <Box>
              {seats.map((seat) => (
                <Chip sx={{ m: 0.5 }} label={seat} />
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default VerifyDetails;
