import React from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import DatosHOC from "../../HOC/DatosHOC/DatosHOC";

const DatosEntrega = (props) => {
  const { handleChange, handleSubmit, userValid, address, city, state } = props;

  return (
    <Box
      component="form"
      onChange={handleChange}
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        required
        name="address"
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address}
        error={!userValid.address}
        helperText={!userValid.address && "Debe ingresar un numero de al menos 3 caracteres"}
      />
      <TextField
        required
        name="city"
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city}
        error={!userValid.city}
        helperText={!userValid.city && "Debe ingresar un numero de al menos 3 caracteres"}
      />
      <TextField
        required
        name="state"
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={state}
        error={!userValid.state}
        helperText={!userValid.state && "Debe ingresar un numero de al menos 3 caracteres"}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={props.handleBack} >
          Atras
        </Button>
        <Button variant="contained" type="submit">
          Crear cuenta
        </Button>
      </Stack>
    </Box>
  );
};

export default DatosHOC(DatosEntrega);
