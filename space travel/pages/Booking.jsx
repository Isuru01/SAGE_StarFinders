import React from "react";
import { BookingContext } from "../context/BookingProvider.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import {
  Container,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from "@mui/material";
import TicketForm from "../component/forms/TicketForm";
import SelectSeats from "../component/forms/SelectSeats";
import PassengerDetails from "../component/forms/PassengerDetails";
import VerifyDetails from "../component/forms/VerifyDetails";

const steps = [
  {
    label: "Ticket Details",
    description: <TicketForm />,
  },
  {
    label: "Select The Seats",
    description: <SelectSeats />,
  },
  {
    label: "Complete Passenger Details",
    description: <PassengerDetails />,
  },
  {
    label: "Verify Details",
    description: <VerifyDetails />,
  },
];

// ... (import statements)

const theme = createTheme({
  // Customize theme properties here
  palette: {
    primary:{
      main:'rgba(77, 71, 195, 1)'
    },
    secondary:{
      main:'rgba(232, 231, 255, 1)'
    },
    text: {
      primary: '#000000', // Change this to your desired primary color
    },
    // Add other palette customization if needed
  },
});

const Booking = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    console.log("call");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <TicketForm onNext={handleNext} />;
      case 1:
        return <SelectSeats onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <PassengerDetails onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <VerifyDetails onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        maxWidth: 400,
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {/* Render the component directly */}
              <Box sx={{ mb: 2 }}>
                {renderStepContent(index)}
                {/* <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    </ThemeProvider>
  );
};

export default Booking;
