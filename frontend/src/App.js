import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddRota from "./pages/AddRota";
import ConsultaRotas from "./pages/ConsultaRotas";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>Rota de Viagem</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/adicionar-rota">Adicionar Rota</Link>
            <Link to="/consulta-rotas">Consulta de Rotas</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adicionar-rota" element={<AddRota />} />
          <Route path="/consulta-rotas" element={<ConsultaRotas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
