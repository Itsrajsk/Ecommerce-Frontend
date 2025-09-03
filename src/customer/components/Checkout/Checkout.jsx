import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import AddressCard from "../AddressCard/AddressCard";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const queryStep = parseInt(querySearch.get("step") || "0", 10);

  const [activeStep, setActiveStep] = React.useState(queryStep);

  // Saved address shown left and in summary (initialize empty)
  const [address, setAddress] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });

  // Independent editing form state - initially empty
  const [editingAddress, setEditingAddress] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });

  // Load saved address from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("checkoutAddress");
    if (saved) {
      const parsed = JSON.parse(saved);
      setAddress(parsed);
    }
  }, []);

  // Save updated address to localStorage & React state
  const handleSaveAddress = (newAddress) => {
    setAddress(newAddress);
    localStorage.setItem("checkoutAddress", JSON.stringify(newAddress));
  };

  React.useEffect(() => {
    const qsStep = parseInt(
      new URLSearchParams(location.search).get("step") || "0",
      10
    );
    if (qsStep !== activeStep) {
      setActiveStep(qsStep);
    }
  }, [location.search]);

  React.useEffect(() => {
    navigate(`?step=${activeStep}`, { replace: true });
  }, [activeStep, navigate]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 py-5">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>

            <div>
              {activeStep === 1 && (
                <DeliveryAddressForm
                  address={address}
                  editingAddress={editingAddress}
                  setEditingAddress={setEditingAddress}
                  setAddress={handleSaveAddress}
                  onDeliverHere={handleNext}
                />
              )}
              {activeStep === 2 && <OrderSummary address={address} />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
