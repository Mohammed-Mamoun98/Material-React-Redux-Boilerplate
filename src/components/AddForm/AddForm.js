import React, { useContext, useState } from "react";
import { TodosContext } from "../../Contexts/TodosContext";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textFeild: {
    width: "20rem",
    flex: "1"
  },
  inputProps: {
    color: "black",
    backgroundColor: "red"
  }
}));

export default function AddForm(props) {
  const classes = useStyles();
  const { addTodo } = useContext(TodosContext);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const validateTitle = () => {
    if (input === "") {
      setError("Empty input");
      return false;
    }
    return true;
  };
  return (
    <div
      style={{
        ...props.style,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ marginRight: "2rem" }}>
        <TextField
          onChange={text => {
            setError(null);
            setInput(text.target.value);
          }}
          className={classes.textFeild}
          placeholder="What todo for today?"
          value={input}
          error={!!error}
          helperText={error}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            if (validateTitle()) {
              console.log("added!");
              addTodo(input);
              setInput("");
            }
          }}
        >
          add
        </Button>
      </div>
    </div>
  );
}
