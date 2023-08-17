import React from "react";
import { Card, CardActionArea, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const navigate = useNavigate();
  const params = { from: "CMB", to: "MRS", date: "2023-21-12" };

  const handleNaviagate = () => {
    const queryString = new URLSearchParams(params).toString();
    navigate(`/search?${queryString}`);
  };

  return (
    <Card
      sx={{
        m: 2,
        background:
          "url(https://develop3d.com/wp-content/uploads/2019/11/HPMars_Hero_SM_FW.png)",
        width: { sm: "100%" },
        height: "400px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: 2,
        }}
      >
        <Typography sx={{ mt: "auto" }} variant="h4">
          Mars
        </Typography>

        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, fuga
          corrupti ullam iusto voluptas ipsa?
        </Typography>

        <Typography variant="h5">Only $850 </Typography>

        <Button variant="contained" onClick={handleNaviagate}>
          Book
        </Button>
      </Box>
    </Card>
  );
};

export default Destination;
