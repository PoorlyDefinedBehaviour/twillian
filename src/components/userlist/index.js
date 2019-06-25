import React from "react";
import { Link } from "react-router-dom";

import { List, ListElement, Avatar, Username } from "./styles";

const UserList = ({ data, path_extractor, force_reload }) => (
  <List>
    {data.map(user => (
      <Link
        to={`${path_extractor(user)}`}
        key={user._id}
        onClick={force_reload}
      >
        <ListElement>
          <Avatar src={user.avatar} alt="User avatar" />
          <Username>{user.username}</Username>
        </ListElement>
      </Link>
    ))}
  </List>
);

export default UserList;
