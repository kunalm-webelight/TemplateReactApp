import { useState, useEffect } from "react";
import "./todoList.css";
export default function ToDoList(props) {
  const taskListFromMain = props.taskList;
  return (
    <span className="right_section">
      <div className="displayArea">
        <ul>
          {taskListFromMain.map((item) => {
            return (
              <p className="displayText" key={item}>
                <li>{item}</li>
              </p>
            );
          })}
        </ul>
      </div>
    </span>
  );
}
