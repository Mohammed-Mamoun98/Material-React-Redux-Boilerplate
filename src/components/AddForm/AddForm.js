import React, { useContext, useState } from "react";
import { TodosContext } from "../../Contexts/TodosContext";
import {
  TextField,
  Button,
  makeStyles,
  CardActionArea,
  Paper
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
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
        display: "flex"
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
          endIcon={<KeyboardArrowDown />}
          style={{ minWidth: "3rem" }}
        >
          <div style={{ marginRight: "3rem" }}>ADD</div>
        </Button>
      </div>
      {/* <CardActionArea style = {{minWidth : '3rem' , display : 'flex' , justifyContent : 'space-between'}}>

          <div>ADD</div>

      </CardActionArea> */}
      <CardActionArea  style={{
            minWidth: "5rem",
            minHeight: "2.5rem",
            backgroundColor: "",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}>
        <Paper
          style={{
            minWidth: "5rem",
            minHeight: "2.5rem",
            backgroundColor: "",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          Button
        </Paper>
      </CardActionArea>
    </div>
  );
}
