import React, { Fragment } from "react";
import './Header.css';
export default function Header(props) {
  return (
    <Fragment>
      <div className="header">
        <h1>{props.name}</h1>
        <input type="text" id="text"></input>
      </div>
    </Fragment>
  );
}
