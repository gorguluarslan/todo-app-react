import React from "react";
import { useTodo } from "../contexts/TodoContext";

const ContentFooter = () => {
  const { todos } = useTodo();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.lenght} </strong>
        item{todos.lenght > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ContentFooter;
