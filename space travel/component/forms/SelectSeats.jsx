import React from "react";
import { Box } from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";

const SelectSeats = () => {
  const left = [
    { seat: "1LW", reserve: false },
    { seat: "1LA", reserve: false },
    { seat: "2LW", reserve: false },
    { seat: "2LA", reserve: false },
    { seat: "3LW", reserve: false },
    { seat: "3LA", reserve: false },
    { seat: "4LW", reserve: false },
    { seat: "4LA", reserve: false },
    { seat: "5LW", reserve: false },
    { seat: "5LA", reserve: false },
    { seat: "6LW", reserve: false },
    { seat: "6LA", reserve: false },
    { seat: "7LW", reserve: false },
    { seat: "7LA", reserve: false },
    { seat: "8LW", reserve: false },
    { seat: "9LA", reserve: false },
    { seat: "10LW", reserve: false },
    { seat: "10LA", reserve: false },
  ];

  const right = [
    { seat: "1RW", reserve: false },
    { seat: "1RA", reserve: false },
    { seat: "2RW", reserve: false },
    { seat: "2RA", reserve: false },
    { seat: "3RW", reserve: false },
    { seat: "3RA", reserve: false },
    { seat: "4RW", reserve: false },
    { seat: "4RA", reserve: false },
    { seat: "5RW", reserve: false },
    { seat: "5RA", reserve: false },
    { seat: "6RW", reserve: false },
    { seat: "6RA", reserve: false },
    { seat: "7RW", reserve: false },
    { seat: "7RA", reserve: false },
    { seat: "8RW", reserve: false },
    { seat: "9RA", reserve: false },
    { seat: "10RW", reserve: false },
    { seat: "10RA", reserve: false },
  ];

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}
    >
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {left.map(({ seat, reserve }) => (
            <Box
              sx={{
                p: 1,
                border: "1px solid grey",
                textAlign: "center",
                bgcolor: reserve ? red[200] : yellow[200],
              }}
            >
              {seat}
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {right.map(({ seat, reserve }) => (
            <Box
              sx={{
                p: 1,
                backgroundSize: "cover",
                hright: "32px",
                border: "1px solid grey",
                textAlign: "center",
                bgcolor: reserve ? red[200] : yellow[200],
              }}
            >
              {seat}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectSeats;
