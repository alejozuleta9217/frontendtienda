import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs"; // Para formatear fechas

const ProductTableSpecial = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/preciosEspeciales")
      .then(response => setProductos(response.data))
      .catch(error => console.error("Error cargando productos", error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Id Usuario</TableCell>
            <TableCell>Id Producto</TableCell>
            <TableCell>Precio Especial</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Fecha Fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto._id}>
              <TableCell>{producto._id}</TableCell>
              <TableCell>{producto.id_usuario}</TableCell>
              <TableCell>${producto.id_producto}</TableCell>
              <TableCell>{producto.precio_especial}</TableCell>
              <TableCell>{dayjs(producto.fecha_inicio).format("YYYY-MM-DD HH:mm")}</TableCell>
              <TableCell>{dayjs(producto.fecha_fin).format("YYYY-MM-DD HH:mm")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTableSpecial;