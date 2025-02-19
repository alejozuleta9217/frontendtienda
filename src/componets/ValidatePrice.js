import { useState } from "react";
import { TextField, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

const ValidatePrice = () => {
  const [form, setForm] = useState({
    id_usuario: "",
    id_producto: "",
  });
  const [precioEspecial, setPrecioEspecial] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value.trim(),
    }));
  };

  const handleValidate = async () => {
    const { id_usuario, id_producto } = form;

    if (!id_usuario || !id_producto) {
      setError("Debe ingresar ambos IDs.");
      setPrecioEspecial(null);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/preciosEspeciales/validar",
        { id_usuario, id_producto },
        { headers: { "Content-Type": "application/json" } }
      );

      setPrecioEspecial(response.data.precioEspecial);
      setError("");
    } catch (error) {
      setPrecioEspecial(null);
      setError("No se encontró un precio especial para este usuario y producto.");
    }
  };

  return (
    <Container>
      <h2>Validar Precio Especial</h2>
      <TextField
        label="ID Usuario"
        name="id_usuario"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        label="ID Producto"
        name="id_producto"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleValidate}>
        Validar
      </Button>

      {precioEspecial && (
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>ID Usuario</TableCell>
                <TableCell>ID Producto</TableCell>
                <TableCell>Precio Especial</TableCell>
                <TableCell>Fecha Inicio</TableCell>
                <TableCell>Fecha Fin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{precioEspecial._id}</TableCell>
                <TableCell>{precioEspecial.id_usuario}</TableCell>
                <TableCell>{precioEspecial.id_producto}</TableCell>
                <TableCell>{precioEspecial.precio_especial}</TableCell>
                <TableCell>{new Date(precioEspecial.fecha_inicio).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(precioEspecial.fecha_fin).toLocaleDateString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {error && <Typography color="error" style={{ marginTop: "20px" }}>{error}</Typography>}
    </Container>
  );
};

export default ValidatePrice;


