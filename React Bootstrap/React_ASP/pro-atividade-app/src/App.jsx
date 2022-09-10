import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

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
    const atividade = {
        id,
        descricao,
    };
    setAtividades([... atividades, {...atividade}])
    console.log(atividades)
  };

  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id" onChange={(e) => {setId(parseInt(e.target.value))}}/>
        <input id="descricao" type="text" placeholder="descricao" onChange={(e) => {setDescricao(e.target.value)}}/>
        <button onClick={addToArray}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <ListGroup>
          {atividades.map((atividade) => {
            return (
              <ListGroup.Item key={atividade.id}>
                {atividade.descricao}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}

export default App;
