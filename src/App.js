import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio"
import Login from "./pages/Login"
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/inicio" element={<Inicio />}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </Router>
  );
}


export default App;


