import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [userData, setUserData] = useState({
    address: "",
    city: "",
    email: "",
    lastname: "",
    name: "",
    number: "",
    password: "",
    state: ""
  });
  const [activeStep, setActiveStep] = useState(0);
  const [dataSent, setDataSent] = useState(false);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      handleNext();
    }
  }
  const handleBack = (event) => {
    event.preventDefault();
    setActiveStep((prev) => prev - 1);
  }

  const handleChange = (event) => {
    setUserData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleDataSend = (event) => {
    event.preventDefault();
    setDataSent(true);
    console.log(userData);
  }

  const steps = [
    {
      nombre: "Datos de usuario",
      componente: <DatosUsuario handleSubmit={handleSubmit} email={userData.email} password={userData.password} />
    },
    {
      nombre: "Datos personales",
      componente: <DatosPersonales handleSubmit={handleSubmit} handleBack={handleBack} name={userData.name} lastname={userData.lastname} number={userData.number} />
    },
    {
      nombre: "Datos de entrega",
      componente: <DatosEntrega handleSubmit={handleDataSend} handleBack={handleBack} address={userData.address} city={userData.city} state={userData.state} />
    },

  ];
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace onChange={handleChange}>
        {dataSent ? <Complete /> : <Stepper steps={steps} activeStep={activeStep} />}
      </FormSpace>
    </Box>
  );
};

export default Form;
