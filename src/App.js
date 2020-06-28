import React from "react";

import api from "./services/api";
import swal from 'sweetalert';

import "./styles.css";
// https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-reactjs
function App() {
  async function handleAddRepository() {
    // TODO
    await api.post('repositories')
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)
      .then(response => swal("Sucesso!", "Repositório removido com sucesso!", "success"));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
