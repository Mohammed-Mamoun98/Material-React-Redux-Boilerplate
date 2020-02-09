import React from "react";
import Card from "../Card/Card";
import TodoItem from "../todoItem/TodoItem";
import AddForm from "../AddForm/AddForm";
export default function TodoList(props) {
  const { todos } = props;
  return (
    <Card
      style={{
        width: "30rem",
        minHeight: "40rem"
      }}
    >
      <AddForm style={{ marginTop: "1rem" }} />
      <div style={{ marginTop: "1rem" }}>
        {todos.map(todo => (
          <TodoItem
            title={todo.title}
            id={todo.id}
            key={todo.id}
            style={{ margin: "0.7rem", width: "90%", fontSize: "0.7rem" }}
          />
        ))}
      </div>
    </Card>
  );
}
