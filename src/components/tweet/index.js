import React from "react";

import "./styles.css";

const Tweet = ({ tweet, handleClick }) => (
  <div className="tweet-card">
    <div className="tweet-card-header">
      <img
        className="tweet-avatar"
        src={tweet.user.avatar}
        alt="Tweet owner avatar"
        onClick={handleClick}
      />
      <h2 className="tweet-username" onClick={handleClick}>
        {tweet.user.username}
      </h2>
    </div>
    <div className="tweet-card-content-container">
      <div className="tweet-card-content">{tweet.content}</div>
    </div>
  </div>
);

export default Tweet;
