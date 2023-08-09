import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect, sem depencias, precisa forçar re-rendização do componente
  // para ser executado

//   useEffect(() => {
//     console.log("Estou sendo executado");
//   });

//   const [number, setNumber] = useState(1);

//   const handleClickForChange = () => {
//     setNumber(number + 1);
//   };

  // use effect apenas uma vez
  // deixar array de depencias vazio
  // 2 - array de dependências vazio
//   useEffect(() => {
//     console.log("Serei executado apenas uma vez!");
//   }, []);

  // 3 - item no array de dependências
//   const [anotherNumber, setAnotherNumber] = useState(0);

//   useEffect(() => {
//     console.log("Sou executado apenas quando anotherNumber muda!");
//   }, [anotherNumber]);

const [anotherNumber, setAnotherNumber] = useState(1)

// useEffect(() => {
//     const timer  = setTimeout(() => {
//         console.log("Hello word");
//     }, 2000);
    
//     return () => clearTimeout(timer)
// }, [anotherNumber])

  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Number</p>
      <button>Alterar Valor</button>
      <hr />
      <p>Another number</p>     
    </div>
  );
};

export default HookUseEffect;
