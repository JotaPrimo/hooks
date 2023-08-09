import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando copm reducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // avançando no use reduce

const initialTasks = [
    { id: 1, text: "Tarefa Um" },
    { id: 2, text: "Tarefa Dois" }
]

// definindo o reducer
const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newTask = {
                id: Math.random(),
                text: textTask
            }
            // limpando o input e retornano o state
            setTextTask('')
            return [...state, newTask]
            break;

        case "DELETE":            
            return state.filter((task) => task.id !== action.id)
        break;
    
        default:
            break;
    }
}

  // alterando o texto da text
  const [textTask, setTextTask] = useState("")
// declaracao do reducer
  const [task, dispatchTasks] = useReducer(taskReducer, initialTasks)


  const removeTask = id => {
    dispatchTasks({action: "DELETE", id: id});
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    // agora criou as acções
    dispatchTasks({ type: "ADD" })
    
  }

  return (
    <div>
      <h2>HookUseReducer</h2>
      <p>Alterando o valor pelo reducer {number}</p>
        <form action="">
            <input type="text" value={textTask} onChange={e => setTextTask(e.target.value)} />
            <button onClick={handleSubmit}>Alterar valor</button>
        </form>
     

      <br />

      <h3>Tarefas</h3>
      {initialTasks.map((task) => 
      <li onDoubleClick={() => dispatchTasks(id)} key={task.id}>{task.nome}</li>
      )}
    </div>
  );
};

export default HookUseReducer;
