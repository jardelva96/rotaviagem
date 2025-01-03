import React, { useState } from "react";
import api from "../services/api";

function AddRota() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/rota", { origem, destino, valor });
      alert("Rota adicionada com sucesso!");
      setOrigem("");
      setDestino("");
      setValor("");
    } catch (error) {
      console.error("Erro ao adicionar rota:", error.message);
      alert("Erro ao adicionar rota.");
    }
  };

  return (
    <div className="add-rota">
      <h1>Adicionar Nova Rota</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <button type="submit">Adicionar Rota</button>
      </form>
    </div>
  );
}

export default AddRota;
