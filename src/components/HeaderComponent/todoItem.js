import React from "react";
import "../styles/todoItem.css";
export default function TodoItem(props) {
  return (
    <div className="container">
      <div className="data">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
