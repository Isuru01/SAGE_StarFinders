import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import { pay } from "../api/payment.api.mjs";

const Pay = () => {
  const { sid } = useParams();

  const mutation = useMutation({
    mutationFn: pay,
    onSuccess: (data) => {
      const url = data.url;
      window.location.href = url;
    },
  });

  const handleSubmit = (e) => {
    mutation.mutateAsync({ username: "isuruakalanka071@gmail.com", sid });
  };

  return (
    <Container>
      <Button onClick={handleSubmit}>Pay</Button>
    </Container>
  );
};

export default Pay;
