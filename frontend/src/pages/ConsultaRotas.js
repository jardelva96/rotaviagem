import React, { useState, useEffect } from "react";
import axios from "axios";

function ConsultaRotas() {
  const [rotas, setRotas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ origem: "", destino: "", valor: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5283/api/rota")
      .then((response) => setRotas(response.data))
      .catch((error) => console.error("Erro ao carregar rotas:", error));
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...rotas[index] });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditData({ origem: "", destino: "", valor: "" });
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:5283/api/rota/${id}`, editData)
      .then(() => {
        setRotas((prevRotas) =>
          prevRotas.map((rota) => (rota.id === id ? { ...rota, ...editData } : rota))
        );
        setEditIndex(null);
        alert("Rota atualizada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao atualizar rota:", error);
        alert("Erro ao atualizar rota.");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5283/api/rota/${id}`)
      .then(() => {
        setRotas((prevRotas) => prevRotas.filter((rota) => rota.id !== id));
        alert("Rota excluída com sucesso!");
      })
      .catch((error) => console.error("Erro ao excluir rota:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Rotas Registradas</h1>
      {rotas.length === 0 ? (
        <p>Nenhuma rota encontrada.</p>
      ) : (
        <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Origem</th>
              <th>Destino</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {rotas.map((rota, index) => (
              <tr key={rota.id}>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="origem"
                      value={editData.origem}
                      onChange={handleChange}
                    />
                  ) : (
                    rota.origem
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="destino"
                      value={editData.destino}
                      onChange={handleChange}
                    />
                  ) : (
                    rota.destino
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="number"
                      name="valor"
                      value={editData.valor}
                      onChange={handleChange}
                    />
                  ) : (
                    `$${rota.valor}`
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <>
                      <button onClick={() => handleUpdate(rota.id)}>Salvar</button>
                      <button onClick={handleCancel}>Cancelar</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)}>Editar</button>
                      <button onClick={() => handleDelete(rota.id)}>Excluir</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ConsultaRotas;
