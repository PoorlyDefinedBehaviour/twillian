import React from 'react';

import {
  Container, Header, Author, Username, Body, Content, Actions, ActionIcon,
} from './styles';
import Avatar from '~/components/Avatar';

export default function Tweet({
  author, content, likes, retweets, comments,
}) {
  function likeTweet() {}

  return (
    <Container>
      <Header>
        <Avatar source={author.avatar} />
        <Author>{author.name}</Author>
        <Username>{author.username}</Username>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
      <Actions>
        <ActionIcon name="md-heart-empty" />
        <ActionIcon name="md-repeat" />
        <ActionIcon name="md-chatbubbles" />
      </Actions>
    </Container>
  );
}
