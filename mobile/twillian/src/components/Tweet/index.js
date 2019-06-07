import React from 'react';

import {
  Header, Author, Username, Body, Content, Actions, ActionIcon,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';

export default function Tweet({
  author, content, likes, retweets, comments,
}) {
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
        <ActionIcon name="heart-outline" />
        <ActionIcon name="repeat" />
        <ActionIcon name="comment-multiple-outline" />
      </Actions>
    </Container>
  );
}
