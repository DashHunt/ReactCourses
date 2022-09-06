import React from "react";

const Challenge = () => {
  const a = 4;
  const b = 5;

  const sumOfValues = () => {
    console.log(a + b);
  };

  return (
    <div>
      <h3>Minha primeira variavel é: {a}</h3>
      <h3>Minha primeira variavel é: {b}</h3>

      <button onClick={sumOfValues}>Clique aqui para somar!</button>
    </div>
  );
};

export default Challenge;
