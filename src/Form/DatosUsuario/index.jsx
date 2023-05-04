import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import DatosHOC from "../../HOC/DatosHOC/DatosHOC";

function DatosUsuario(props) {
  const { handleChange, userValid, handleSubmit, email, password } = props;
  return (
    <Box
      component="form"
      itemProp={{ autoComplete: "off" }}
      onSubmit={handleSubmit}
      onChange={handleChange}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        required
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={!userValid.email}
        name="email"
        helperText={!userValid.email && "Ingresa un correo electrónico válido"}
        value={email}
      />
      <TextField
        required
        label="Contraseña"
        error={!userValid.password}
        inputProps={{ minLength: 6 }}
        helperText={!userValid.password && "Ingrese una contraseña de al menos 6 caracteres"}
        name="password"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  )
}

export default DatosHOC(DatosUsuario);