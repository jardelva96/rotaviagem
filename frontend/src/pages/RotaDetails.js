import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./RotaDetails.css";

function RotaDetails() {
  const { id } = useParams();
  const [rota, setRota] = useState(null);

  useEffect(() => {
    api.get(`/rotas/${id}`)
      .then((response) => setRota(response.data))
      .catch((error) => console.error("Erro ao buscar detalhes da rota:", error));
  }, [id]);

  if (!rota) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="rota-details">
      <h1>{rota.nome}</h1>
      <p>{rota.descricao}</p>
    </div>
  );
}

export default RotaDetails;
