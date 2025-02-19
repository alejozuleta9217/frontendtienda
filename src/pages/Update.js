import React from "react";
import { Container } from "@mui/material";
import UpdatePriceForm from "../componets/UpdatePriceForm";

const UpdatePricePage = () => {
  return (
    <Container>
      <h1>Actualizar Precio Especial</h1>
      <UpdatePriceForm />
    </Container>
  );
};

export default UpdatePricePage;