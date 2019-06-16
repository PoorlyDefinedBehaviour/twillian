import React, { useState } from 'react';

import { withNavigation } from 'react-navigation';

import {
  Header, Username, Body, Content, Actions,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';
import Like from '~/components/Like';
import Action from '~/components/Action';

function Tweet({ data, navigation }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  const {
    _id, user, content, likes, retweets, comments,
  } = data;

  return (
    <Container>
      <Header>
        <Avatar source={user.avatar} onPress={() => navigation.push('Profile', { user })} />
        <Username>@{user.username}</Username>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
      <Actions>
        <Like onPress={handleLike} liked={liked} quantity={likes.length} />
        <Action name="retweet" color="#14171a" quantity={retweets.length} />
        <Action name="comment-alt" color="#14171a" quantity={comments.length} />
      </Actions>
    </Container>
  );
}

export default withNavigation(Tweet);
