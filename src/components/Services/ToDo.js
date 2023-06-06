import { useState ,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addToDoNormal = () => {
    setTaskList([...taskList, taskName]);
  };
  const handleTask = (e) => {
    setTaskName(e.target.value);
    // console.log(e.target.value);
  };
  console.log(taskList);

  return (
    <>
      <h1>ToDOApp</h1>
      <label htmlFor="taskname">TaskName :</label>
      <input type="text" name="taskname" id="taskname" onChange={handleTask} />
      <br />
      <label htmlFor="taskpriority">TaskPriority :</label>
      <input type="number" name="taskpriority" id="taskpriority" />
      <br />
      <input type="button" value="NormalAdd" onClick={addToDoNormal} />
      {/* <input type="button" value="AddInBetween" onClick={addToDoBetween()} /> */}
      {/* <input type="button" value="AddOverElement" onClick={addOverElement()} /> */}

      {taskList.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
}
