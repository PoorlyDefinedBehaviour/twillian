import React from "react";
import "./styles.css";

const FollowButton = ({ clickHandler }) => (
  <button className="follow-button" onClick={clickHandler}>
    Seguir
  </button>
);

export default FollowButton;
