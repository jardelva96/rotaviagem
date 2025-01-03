import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [rotas, setRotas] = useState([]); // Estado para armazenar as rotas
  const [rota, setRota] = useState(""); // Input para consulta
  const [resultado, setResultado] = useState(null); // Resultado da melhor rota
  const [erroConsulta, setErroConsulta] = useState(false); // Indica erro na consulta

  // Carregar rotas existentes do backend ao carregar a página
  useEffect(() => {
    axios
      .get("http://localhost:5283/api/Rota") // Endpoint do backend para listar todas as rotas
      .then((response) => setRotas(response.data))
      .catch((error) => console.error("Erro ao carregar rotas:", error));
  }, []);

  // Consulta a melhor rota com base em origem e destino
  const handleConsulta = (e) => {
    e.preventDefault();

    const [origem, destino] = rota.split("-");

    if (!origem || !destino) {
      setErroConsulta(true);
      return;
    }

    axios
      .get(
        `http://localhost:5283/api/Rota/melhorrota?origem=${origem.trim()}&destino=${destino.trim()}`
      )
      .then((response) => {
        setResultado(response.data);
        setErroConsulta(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar rota:", error);
        setErroConsulta(true);
      });
  };

  return (
    <div className="home">
      <h1>Consulta de Melhor Rota</h1>
      <form onSubmit={handleConsulta}>
        <label>Digite a rota (formato DE-PARA):</label>
        <input
          type="text"
          value={rota}
          onChange={(e) => setRota(e.target.value)}
          placeholder="Ex: GRU-CDG"
          required
        />
        <button type="submit">Consultar</button>
      </form>
      {erroConsulta && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Não foi possível encontrar a rota especificada. Verifique o formato
          (DE-PARA) ou os dados inseridos.
        </p>
      )}
      {resultado && (
        <div className="resultado">
          <h2>Melhor Rota:</h2>
          {resultado.rota && resultado.rota.length > 0 ? (
            <p>
              {resultado.rota.join(" - ")} ao custo de ${resultado.custo}
            </p>
          ) : (
            <p>Nenhuma rota encontrada para os parâmetros fornecidos.</p>
          )}
        </div>
      )}
      <div className="lista-rotas" style={{ marginTop: "2rem" }}>
        <h2>Rotas Registradas</h2>
        {rotas.length === 0 ? (
          <p>Nenhuma rota encontrada.</p>
        ) : (
          <ul>
            {rotas.map((rota) => (
              <li key={rota.id}>
                {rota.origem} - {rota.destino} ao custo de ${rota.valor}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
