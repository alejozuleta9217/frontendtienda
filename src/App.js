import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./componets/Navigation";
import Articles from "./pages/Article";
import Upload from "./pages/Upload";
import Update from "./pages/Update";
import Validate from "./pages/Validate";
import Especial from "./pages/ArticleSpecial";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/subida" element={<Upload />} />
        <Route path="/actualizar" element={<Update />} />
        <Route path="/validar" element={<Validate />} />
        <Route path="/especial" element={<Especial />} />
      </Routes>
    </Router>
  );
}

export default App;
