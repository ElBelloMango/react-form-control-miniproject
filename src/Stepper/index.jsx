import React from "react";
import { Box, Stepper, Step, StepLabel, StepContent } from "@mui/material";

const StepperComponent = ({ steps,activeStep}) => {
  
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.nombre}>
            <StepLabel>{step.nombre}</StepLabel>
            <StepContent>{step.componente}</StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
