import React from "react";

import { Button } from "./styles.js";

const FollowButton = ({ clickHandler }) => (
  <Button onClick={clickHandler}>Seguir</Button>
);

export default FollowButton;
