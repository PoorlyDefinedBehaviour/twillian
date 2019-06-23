import React from "react";

import "./styles.css";

const UserList = ({ data }) => (
  <ul className="userlist">
    {data.map(user => (
      <li className="userlist-element" key={user._id}>
        <img className="userlist-avatar" src={user.avatar} />
        <span className="userlist-username">{user.username}</span>
      </li>
    ))}
  </ul>
);

export default UserList;
