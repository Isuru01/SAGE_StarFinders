import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Button, Typography, Paper } from "@mui/material";
import { pay } from "../api/payment.api.mjs";
import { getTicketTotal } from "../api/booking.api.mjs";

const Pay = () => {
  const { sid } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["shuttle"],
    queryFn: getTicketTotal,
  });

  const mutation = useMutation({
    mutationFn: pay,
    onSuccess: (data) => {
      const url = data.url;
      window.location.href = url;
    },
  });

  if (isLoading) return <div>Loading</div>;

  const handleSubmit = (e) => {
    mutation.mutateAsync({ username: "isuruakalanka071@gmail.com", sid });
  };

  return (
    <Container>
      {/* <Box component={Paper} mb={2} p={2}>
        <Typography sx={{ fontSize: "1.8rem" }}>Your Total Value</Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>$3000.00</Typography>
      </Box> */}

      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Pay
      </Button>
    </Container>
  );
};

export default Pay;
