import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  AvatarImage,
  Username,
  CardContentContainer,
  CardContent
} from "./styles";

const Tweet = ({ tweet, path_extractor, force_reload }) => (
  <Card>
    <CardHeader>
      <Link to={path_extractor(tweet)} onClick={force_reload}>
        <AvatarImage src={tweet.user.avatar} alt="Tweet owner avatar" />
        <Username>{tweet.user.username}</Username>
      </Link>
    </CardHeader>
    <CardContentContainer>
      <CardContent>{tweet.content}</CardContent>
    </CardContentContainer>
  </Card>
);

export default Tweet;
