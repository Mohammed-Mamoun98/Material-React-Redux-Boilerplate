import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="header">
      <h2 className="logo">School</h2>
      <ul className="list">
        <li>
          <a href="#">courses</a>
        </li>
        <li>
          <a href="#">Teachers</a>
        </li>
        <li>
          <a href="#">Parents</a>
        </li>
        <li>
          <a href="#">Sign out</a>
        </li>
      </ul>
    </div>
  );
}
