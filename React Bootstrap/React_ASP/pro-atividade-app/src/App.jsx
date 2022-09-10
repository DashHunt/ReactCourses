import { useState } from "react";

import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import Topbar from "./components/Navbar";
import AlertDismissibleExample from "./components/Alert";

import "./App.css";

const initialState = [
  {
    id: 1,
    descricao: "Primeira atividade",
  },
  {
    id: 2,
    descricao: "Segunda atividade",
  },
  {
    id: 3,
    descricao: "Terceira atividade",
  },
  {
    id: 4,
    descricao: "Quartas atividade",
  },
];

function App() {
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [atividades, setAtividades] = useState(initialState);

  const addToArray = (e) => {
    e.preventDefault();
    if (id != "" && descricao != "") {
      const atividade = {
        id,
        descricao,
      };
      setAtividades([...atividades, { ...atividade }]);
    } else {
      alert("Error: Insira um ID e uma descricao para adicionar");
    }
  };

  return (
    <>
      <Topbar></Topbar>
      <br />
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            id="id"
            type="text"
            className="form-control"
            onChange={(e) => {
              setId(parseInt(e.target.value));
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <input
            id="descricao"
            type="text"
            className="form-control"
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={addToArray}>
            + Atividade
          </button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map((atividade) => {
          return (
            <div key={atividade.id}>
              <Card>
                <Card.Header>ID: {atividade.id}</Card.Header>
                <Card.Body>
                  <Card.Text>{atividade.descricao}</Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
