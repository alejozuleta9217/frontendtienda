import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const UpdatePriceForm = () => {
  const [form, setForm] = useState({
    id_producto: "",
    precio_especial: "",
    fecha_inicio: dayjs().startOf("day").toISOString(),
    fecha_fin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "precio_especial" ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/preciosEspeciales/${form.id_producto}`, {
        precio_especial: form.precio_especial,
        fecha_fin: dayjs(form.fecha_fin).startOf("day").toISOString(),
      });

      alert("Precio especial actualizado");
    } catch (error) {
      console.error("Error al actualizar precio especial", error.response?.data || error);
    }
  };

  return (
    <Container>
      <h2>Actualizar Precio Especial</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="ID Producto" name="id_producto" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Nuevo Precio Especial" name="precio_especial" type="number" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Fecha Fin" name="fecha_fin" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary">Actualizar</Button>
      </form>
    </Container>
  );
};

export default UpdatePriceForm;
