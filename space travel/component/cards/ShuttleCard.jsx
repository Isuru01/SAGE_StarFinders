import React, { useState } from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import { blue, green } from "@mui/material/colors";
import { Card, Typography, Box, Button, Modal } from "@mui/material";
import ClassModal from "../modal/ClassModal";

const ShuttleCard = () => {
  const [open, setOpen] = useState(false);

  const handleOption = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOption} sx={{ bgcolor: "#C5C3F4", mt: 2, p: 1 }}>
        <Typography sx={{ fontWeight: "500", mb: 1 }}>
          Opt 1 Non Stop 3h 00min
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            borderTop: "1px solid #FFFFFF",
            py: 2,
          }}
        >
          <RocketIcon sx={{ fontSize: "3rem" }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.3 }}
              >
                Earth
              </Typography>
              <Typography sx={{ fontSize: "0.6rem", lineHeight: 1 }}>
                On 24h 00min <br /> Sun, Jul 23
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.43 }}
              >
                Jupitar
              </Typography>
              <Typography
                sx={{ fontSize: "0.6rem", lineHeight: 1, textAlign: "right" }}
              >
                On 24h 00min <br /> Sun, Jul 23
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #FFFFFF",
          }}
        >
          <Typography variant="subtitle2">Carrier Virgin</Typography>
          <Button size="small" variant="outlined">
            Book
          </Button>
        </Box>
      </Card>

      <ClassModal open={open} handleClose={handleClose} />
    </>
  );
};

export default ShuttleCard;
