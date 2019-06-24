import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Tweet = ({ tweet, path_extractor, force_reload }) => (
  <div className="tweet-card">
    <div className="tweet-card-header">
      <Link to={path_extractor(tweet)} onClick={force_reload}>
        <img
          className="tweet-avatar"
          src={tweet.user.avatar}
          alt="Tweet owner avatar"
        />
        <h2 className="tweet-username">{tweet.user.username}</h2>
      </Link>
    </div>
    <div className="tweet-card-content-container">
      <div className="tweet-card-content">{tweet.content}</div>
    </div>
  </div>
);

export default Tweet;
