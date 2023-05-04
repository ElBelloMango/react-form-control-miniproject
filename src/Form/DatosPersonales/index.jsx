import React from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import DatosHOC from "../../HOC/DatosHOC/DatosHOC";

const DatosPersonales = (props) => {
  const { handleChange, userValid, handleSubmit, name, lastname, number } = props;
  return (
    <Box
      component="form"
      autoComplete="off"
      onChange={handleChange}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        required
        inputProps={{ minLength: 3 }}
        error={!userValid.name}
        helperText={!userValid.name && "Debe ingresar un nombre de al menos 3 caracteres"}
        name="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name}
      />
      <TextField
        required
        inputProps={{ minLength: 3 }}
        name="lastname"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        error={!userValid.lastname}
        helperText={!userValid.lastname && "Debe ingresar un apellido de al menos 3 caracteres"}
        type="text"
        value={lastname}
      />
      <TextField
        required
        name="number"
        label="Número telefónico"
        variant="outlined"
        fullWidth
        error={!userValid.number}
        helperText={!userValid.number && "Debe ingresar un numero de al menos 3 caracteres"}
        margin="dense"
        type="tel"
        inputProps={{pattern: "[0-9]*", minLength: 3 }}
        value={number}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={props.handleBack} >
          Atras
        </Button>
        <Button variant="contained" type="submit" onClick={props.handleNext}>
          Siguiente
        </Button>
      </Stack>
    </Box>
  );
};

export default DatosHOC(DatosPersonales);
