import { useState } from "react";
import ToDoForm from "../../components/TodoForm";
import ToDoList from "../../components/TodoList";
import "./todo.css";
export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  const fetchAndSetList = (fetchedTaskList) => {
    setTaskList(fetchedTaskList);
  };

  return (
    <div className="my_container">
      <ToDoForm fetchAndSetList={fetchAndSetList} />
      <ToDoList taskList={taskList} />
    </div>
  );
}
