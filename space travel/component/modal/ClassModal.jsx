import React, { useState } from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import { blue, green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Box, Button, Modal, Stack } from "@mui/material";

const OptionModal = ({ open, handleClose }) => {
  const [selectedOption, setSelectedOption] = useState("Business");
  const naviagte = useNavigate();

  const handleProceed = () => {
    naviagte(`/booking/1231231/${selectedOption}/2023-12-21`);
  };

  const handleSelected = (option) => {
    setSelectedOption(option);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Box
          sx={{
            p: 2,
            borderRadius: "4px",
            bgcolor: "#C5C3F4",
            backgroundImage: `linear-gradient(to bottom, rgba(128,0,128,0.5), rgba(128,0,128,0.5)), url("https://images.pexels.com/photos/7664624/pexels-photo-7664624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            backgroundSize: "cover",
            color: "#FFFFFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            height: "50%",
            width: "70%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              height: "100%",
            }}
          >
            <Typography
              id="modal-modal-title"
              sx={{ fontWeight: "500", fontSize: "1.4rem" }}
            >
              Select an option
            </Typography>
            <Typography
              mb={2}
              id="modal-modal-description"
              gutterBottom
              sx={{ fontWeight: 500 }}
            >
              #Fast #Secure #Direct <br /> Your Travel Companion
            </Typography>
            <Stack>
              <Box
                sx={{
                  p: 2,
                  mb: 1,
                  display: "flex",
                  border:
                    selectedOption === "Economy"
                      ? "2px solid #FFFFFF"
                      : "1px solid #FFFFFF",
                  borderRadius: "4px",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "border-width 0.2s ease-in-out",
                }}
                onClick={() => handleSelected("Economy")}
              >
                <Typography sx={{ fontWeight: "500" }}>Economy</Typography>
                <Typography sx={{ fontWeight: "500" }}>$850</Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  position: "relative",
                  border:
                    selectedOption === "Business"
                      ? "2px solid #FFFFFF"
                      : "1px solid #FFFFFF",
                  borderRadius: "4px",
                  justifyContent: "space-between",
                  transition: "border-width 0.2s ease-in-out",
                }}
                onClick={() => handleSelected("Business")}
              >
                <Typography sx={{ fontWeight: "500" }}>Business</Typography>
                <Typography sx={{ fontWeight: "500" }}>$850</Typography>
              </Box>
            </Stack>
            <Box sx={{ mt: 4, display: "flex", gap: 1 }}>
              <Button
                fullWidth
                size="small"
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                size="small"
                variant="contained"
                onClick={handleProceed}
              >
                Proceed
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default OptionModal;
