import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const UserList = ({ data, path_extractor, force_reload }) => (
  <ul className="userlist">
    {data.map(user => (
      <Link
        to={`${path_extractor(user)}`}
        key={user._id}
        onClick={force_reload}
      >
        <li className="userlist-element">
          <img
            className="userlist-avatar"
            src={user.avatar}
            alt="User avatar"
          />
          <span className="userlist-username">{user.username}</span>
        </li>
      </Link>
    ))}
  </ul>
);

export default UserList;
