import React, { useContext, createContext, useState } from "react";
import { TodosContext } from "../Contexts/TodosContext";
import TodoItem from "../components/todoItem/TodoItem";
import uuid from "uuid";
import TodoList from "../components/TodoList.js/TodoList";
import AddForm from "../components/AddForm/AddForm";

export default function TodoScreen(props) {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos([...todos, { id: uuid.v4(), title }]);
  };

  const initialState = {
    todos: [],
    addTodo
  };
  return (
    <TodosContext.Provider value={initialState}>
      <div
        style={{
          display: "flex",
          height: "100vh"
        }}
      >
        <div style={{ margin: "5rem auto" }}>
          <TodoList todos={todos} />
        </div>
      </div>
    </TodosContext.Provider>
  );
}
