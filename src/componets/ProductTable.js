
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

const ProductTable = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/productos")
      .then(response => setProductos(response.data))
      .catch(error => console.error("Error cargando productos", error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Categoría</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Creado</TableCell>
            <TableCell>Actualizado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto._id}>
              <TableCell>{producto._id}</TableCell>
              <TableCell>{producto.name}</TableCell>
              <TableCell>${producto.price}</TableCell>
              <TableCell>{producto.category}</TableCell>
              <TableCell>{producto.stock}</TableCell>
              <TableCell>{producto.description}</TableCell>
              <TableCell>{producto.tags?.join(", ")}</TableCell>
              <TableCell>{dayjs(producto.createdAt).format("YYYY-MM-DD HH:mm")}</TableCell>
              <TableCell>{dayjs(producto.updatedAt).format("YYYY-MM-DD HH:mm")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
