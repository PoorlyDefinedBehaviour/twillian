import React from 'react';

import {
  Header, Author, Username, Body, Content, Actions,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';
import Action from '~/components/Action';

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
        <Action name="heart-outline" color="#14171a" quantity={likes} />
        <Action name="repeat" color="#14171a" quantity={retweets} />
        <Action name="comment-multiple-outline" color="#14171a" quantity={comments} />
      </Actions>
    </Container>
  );
}
