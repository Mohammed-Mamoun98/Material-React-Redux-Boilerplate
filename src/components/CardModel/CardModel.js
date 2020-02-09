import React from "react";
import {
  CardActionArea,
  Card,
  makeStyles,
  IconButton
} from "@material-ui/core";
import { CardModelStyles } from "./CardModelStyles";
import tableHeaderTitles from "../../data/tableHeaderTitles";
import FilterListIcon from "@material-ui/icons/FilterList";

const { root, font } = CardModelStyles;

const useStyles = makeStyles(theme => ({
  root
}));

const TableColumn = props => {
  const { size = 1 } = props;
  return (
    <div
      style={{
        flex: size,
        ...font,
        fontWeight: 100,
        textAlign: "left",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
};
const CardModel = props => {
  return (
    <>
      <Card style={root}>
        <TableColumn size={0.6}>
          <h2>TASK TYPE</h2>
        </TableColumn>

        <TableColumn size={1.2}>
          <h2>REFERENCE ID</h2>
        </TableColumn>

        <TableColumn size={1.6}>
          <h2>PROVIDER GROUP</h2>
        </TableColumn>

        <TableColumn size={1.3}>
          <h2>RENDERING PROVIDER</h2>
        </TableColumn>

        <TableColumn size={0.6}>
          <h2>RECIEVED</h2>
        </TableColumn>

        <TableColumn size={0.8}>
          <h2>DUE DATE</h2>
        </TableColumn>

        <TableColumn size={0.9}>
          <h2>DATE SPAN</h2>
        </TableColumn>

        <TableColumn size={1.1}>
          <h2>DETAILED STATUS</h2>
        </TableColumn>

        <TableColumn size={1.6}>
          <h2>CAMPIGON NAME</h2>
        </TableColumn>

        <IconButton color="primary">
          <FilterListIcon color="primary" style={{ color: "white" }} />
        </IconButton>
      </Card>

      <Card
        style={{
          ...root,
          backgroundColor: "white",
          color: "black",
          marginTop: "0.5rem"
        }}
      >
        <TableColumn size={0.6}>
          <h2>TASK TYPE</h2>
        </TableColumn>

        <TableColumn size={1.2}>
          <h2>REFERENCE ID</h2>
        </TableColumn>

        <TableColumn size={1.6}>
          <h2>PROVIDER GROUP</h2>
        </TableColumn>

        <TableColumn size={1.3}>
          <h2>RENDERING PROVIDER</h2>
        </TableColumn>

        <TableColumn size={0.6}>
          <h2>RECIEVED</h2>
        </TableColumn>

        <TableColumn size={0.8}>
          <h2>DUE DATE</h2>
        </TableColumn>

        <TableColumn size={0.9}>
          <h2>DATE SPAN</h2>
        </TableColumn>

        <TableColumn size={1.1}>
          <h2>DETAILED STATUS</h2>
        </TableColumn>

        <TableColumn size={1.6}>
          <h2>CAMPIGON NAME</h2>
        </TableColumn>
        <IconButton color="primary">
          <FilterListIcon color="primary" style={{ color: "white" }} />
        </IconButton>
      </Card>
    </>
  );
};

export default CardModel;

//  {/*
//     {tableHeaderTitles.map(title => (
//       <TableColumn>
//         <h2>{title}</h2>
//       </TableColumn>
//     ))}
//     <IconButton color="primary">
//       <FilterListIcon color="primary" />
//     </IconButton> */}
