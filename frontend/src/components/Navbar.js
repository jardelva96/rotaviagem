import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rota de Viagem</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-rota">Adicionar Rota</Link>
        <Link to="/consulta-rotas">Consulta de Rotas</Link>
      </div>
    </nav>
  );
};

export default Navbar;
