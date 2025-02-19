import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const AddPriceForm = () => {
  const [form, setForm] = useState({
    id_usuario: "",
    id_producto: "",
    precio_especial: "",
    fecha_inicio: dayjs().startOf("day").toISOString(), // Formato UTC
    fecha_fin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convertir valores según el campo
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "precio_especial" ? parseFloat(value) || "" : value, // Convertir a número si es precio
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Función para validar ObjectId (24 caracteres hexadecimales)
    const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);
  
    // Validar que los ID sean correctos
    if (!isValidObjectId(form.id_usuario) || !isValidObjectId(form.id_producto)) {
      alert("Error: El ID de usuario o producto no es válido.");
      return;
    }
  
    // Asegurar formato correcto de las fechas
    const formattedData = {
      ...form,
      id_usuario: form.id_usuario.trim(), // Eliminar espacios
      id_producto: form.id_producto.trim(),
      fecha_fin: dayjs(form.fecha_fin).startOf("day").toISOString(), // Convertir fecha a formato UTC
    };
  
    try {
      await axios.post("http://localhost:5000/api/preciosEspeciales", formattedData);
      alert("Precio especial agregado");
    } catch (error) {
      console.error("Error al agregar precio especial", error.response?.data || error);
    }
  };
  

  return (
    <Container>
      <h2>Agregar Precio Especial</h2>
      <form onSubmit={handleSubmit}>
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
        <TextField
          label="Precio Especial"
          name="precio_especial"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Fecha Fin"
          name="fecha_fin"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Agregar
        </Button>
      </form>
    </Container>
  );
};

export default AddPriceForm;

