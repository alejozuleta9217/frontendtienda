import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tienda
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Artículos
        </Button>
        <Button color="inherit" component={Link} to="/subida">
          Subida
        </Button>
        <Button color="inherit" component={Link} to="/validar">
          Validar
        </Button>
        <Button color="inherit" component={Link} to="/actualizar">
          Actualizar
        </Button>
        <Button color="inherit" component={Link} to="/especial">
          Articulos Especiales
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
