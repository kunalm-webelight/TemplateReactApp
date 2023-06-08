import { useState, useEffect } from "react";
import "./todoForm.css";
export default function ToDoForm(props) {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addToDoNormal = (e) => {
    e.preventDefault();
    setTaskList([...taskList, taskName]);
  };
  useEffect(()=>{
    props.fetchAndSetList(taskList);
  },[taskList])

  const handleTask = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <>
      
      <span className="left_section">
          <div>
            <form action="" onSubmit={addToDoNormal}>
              <label htmlFor="taskname">TaskName :</label>
              <input
                type="text"
                name="taskname"
                id="taskname"
                onChange={handleTask}
              />
              {/* <label htmlFor="taskpriority">TaskPriority :</label> */}
              {/* <input type="number" name="taskpriority" id="taskpriority" /> */}
              <br />
              <button type="submit" className="buttons">Add</button>
            </form>
          </div>
        </span>

      
    </>
  );
}
