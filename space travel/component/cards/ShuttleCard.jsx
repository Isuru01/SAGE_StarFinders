import React, { useState } from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import { blue, green } from "@mui/material/colors";
import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { Card, Typography, Box, Button, Modal, duration } from "@mui/material";
import ClassModal from "../modal/ClassModal";

const ShuttleCard = ({ data, index }) => {
  const { key, depTime, arrTime, carrier, duration, arrPort, depPort } = data;

  const [open, setOpen] = useState(false);

  const handleOption = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleOption}
        sx={{ bgcolor: "#7A77B4", color: "#FFFFFF", mt: 2, p: 1 }}
      >
        <Typography sx={{ fontWeight: "500", mb: 1 }}>
          Opt {index + 1} Non Stop {duration.slice(0, 15)}
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
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {depPort}
              </Typography>
              <Typography sx={{ fontSize: "0.6rem", lineHeight: 1 }}>
                On {formatTime(depTime)[0]}
              </Typography>
              <Typography sx={{ fontSize: "0.6rem", lineHeight: 1 }}>
                {formatTime(depTime)[1]}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.3 }}
              >
                {arrPort}
              </Typography>
              <Typography sx={{ fontSize: "0.6rem", lineHeight: 1.4 }}>
                On {formatTime(depTime)[0]}
              </Typography>
              <Typography sx={{ fontSize: "0.6rem", lineHeight: 1 }}>
                {formatTime(depTime)[1]}
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
          <Typography variant="subtitle2">Carrier {carrier}</Typography>
          <Button
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "rgba(232, 231, 255, 1)" }}
          >
            Book
          </Button>
        </Box>
      </Card>

      <ClassModal shuttle={key} open={open} handleClose={handleClose} />
    </>
  );
};

const formatTime = (time) => {
  const date = dayjs(time, "YYYY-MM-DDTHH:mm:ss");
  return date.format(`HH[h] mm[min]  \n ddd, MMM DD`).split("\n");
};

export default ShuttleCard;
