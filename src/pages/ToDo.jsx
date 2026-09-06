import { useEffect, useState } from "react";
import ToDOList from "../components/to-do-list";
import { ToDoService } from "../services/todo-service";

function ToDo({ }) {
  const [todo, setToDo] = useState([]);

  useEffect(() => {
    const getToDos = async () => {
      const todo = await ToDoService.GetToDo();
      console.log(todo);
      setToDo(todo);
    }

    getToDos();
  }, []);

  return (
    <>
      <div>This is ToDo page</div>
      <ToDOList lstToDo={todo}></ToDOList>
    </>
  );
}

export default ToDo;