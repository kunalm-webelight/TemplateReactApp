import { useState, useEffect } from "react";
import ToDoForm from "./TodoForm";
import ToDoList from "./TodoList";
import "./todo.css";
export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  const fetchAndSetList=(fetchedTaskList)=>{
    setTaskList(fetchedTaskList);
  }

  return (
    <>
      <div className="my_container">
        <ToDoForm fetchAndSetList={fetchAndSetList}/>
        <ToDoList taskList={taskList}/>
      </div>
    </>
  );
}
