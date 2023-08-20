import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { red, yellow, blue } from "@mui/material/colors";
import { BookingContext } from "../../context/BookingProvider";
import { fetchSeatMap, holdSeats } from "../../api/seats.api.mjs";

const SelectSeats = ({ onNext, onBack }) => {
  const { sid } = useParams();

  const { selected, setSelected, booking } = useContext(BookingContext);

  const username = "isuruakalanka071@gmail.com";

  const {
    isLoading,
    data: seatData,
    refetch,
  } = useQuery({
    queryKey: ["ticket", sid],
    queryFn: fetchSeatMap,
  });

  //const muatation
  const mutation = useMutation({
    mutationFn: holdSeats,
    onSuccess: () => {
      refetch();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutateAsync({ username, selected, sid });
  };

  if (isLoading) return <div>Loading</div>;

  const { seats } = seatData;

  const left = seats.left;
  const right = seats.right;

  const handleSelect = (seat) => {
    if (!seat.reserve) {
      const isAlreadySelected = selected.some(
        (item) => item.seat === seat.seat
      );

      if (isAlreadySelected) {
        setSelected((prev) => prev.filter((item) => item.seat !== seat.seat));
      } else {
        if (selected.length < booking.adults) {
          setSelected((prev) => [
            ...prev,
            { seat: seat.seat, bookBy: username },
          ]);
        }
      }
    }
  };

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}
    >
      <Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          {left.map(({ seat, reserve, step }) => (
            <Box
              key={seat}
              onClick={() => handleSelect({ seat, reserve })}
              sx={{
                p: 1,
                border: "1px solid grey",
                textAlign: "center",
                bgcolor:
                  reserve || step === 1
                    ? red[200]
                    : selected.some((item) => item.seat === seat)
                    ? blue[200]
                    : yellow[200],
              }}
            >
              {seat}
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          {right.map(({ seat, reserve, step }) => (
            <Box
              key={seat}
              onClick={() => handleSelect({ seat, reserve })}
              sx={{
                p: 1,
                border: "1px solid grey",
                textAlign: "center",
                bgcolor:
                  reserve || step === 1
                    ? red[200]
                    : selected.some((item) => item.seat === seat)
                    ? blue[200]
                    : yellow[200],
              }}
            >
              {seat}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 1, mr: 1 }}
        >
          Save
        </Button>
      </Box>
      <br />
      <Box sx={{ mb: 2, display: "flex" }}>
        <Button onClick={onBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={onNext} sx={{ mt: 1, mr: 1 }}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default SelectSeats;
