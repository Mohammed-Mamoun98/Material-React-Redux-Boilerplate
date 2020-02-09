import React, { useContext, useState } from "react";
import { TodosContext } from "../../Contexts/TodosContext";
export default function TodoItem(props) {
  const { title } = props;
  return (
    <div style={{ ...props.style }}>
      <h1>{title}</h1>
    </div>
  );
}
