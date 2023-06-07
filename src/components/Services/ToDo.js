import { useState, useEffect } from "react";
import "./todo.css";
export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addToDoNormal = (e) => {
    e.preventDefault();
    setTaskList([...taskList, taskName]);
  };
  const handleTask = (e) => {
    setTaskName(e.target.value);
  };
  console.log(taskList);


  return (
    <>
      <div className="my_container">
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
              <br />
              <label htmlFor="taskpriority">TaskPriority :</label>
              <input type="number" name="taskpriority" id="taskpriority" />
              <br />
              <button type="submit" className="buttons">Add</button>
            </form>
          </div>
        </span>
        <span className="right_section">
          <div className="displayArea">
            <ul>
            {taskList.map((item) => {
              return <p className="displayText" key={item}><li>{item}</li></p>;
            })}
            </ul>
          </div>
        </span>
      </div>
    </>
  );
}
