import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import success from "./assets/paysuccess.jpg";

const paymentSuccess = () => {
  return (
    <>
      <Card sx={{ width: "50%", margin: "0 auto", marginTop: 10 }}>
        <CardMedia
          sx={{
            height: { xs: 300, sm: 400 },
            borderRadius: "3%",
          }}
          image={success}
          title="payment success"
        />
        <CardContent>
          <Paper
            style={{ backgroundColor: "rgba(77, 71, 195, 1)", padding: "14px" }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontFamily: "Arial", color: "white", textAlign: "center" }}
              gutterBottom
            >
              Payment Successful
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default paymentSuccess;
