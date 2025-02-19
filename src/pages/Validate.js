import React from "react";
import { Container } from "@mui/material";
import ValidatePrice from "../componets/ValidatePrice";

const ValidatePricePage = () => {
  return (
    <Container>
      <h1>Validar Precio Especial</h1>
      <ValidatePrice />
    </Container>
  );
};

export default ValidatePricePage;