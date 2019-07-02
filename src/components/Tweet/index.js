import React from 'react';

import { parseISO, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  RetweetWrapper,
  Retweeted,
  TweetContainer,
  Header,
  Data,
  Username,
  Time,
  Body,
  Content
} from './styles';

import Avatar from '../Avatar';

function Tweet({ data, history }) {
  if (data.retweeted) {
    const { user, content, createdAt } = data.retweeted;

    return (
      <Container>
        <RetweetWrapper>
          <Retweeted>{data.user.username} retweetou</Retweeted>
        </RetweetWrapper>
        <TweetContainer>
          <Header>
            <Data>
              <Avatar
                source={user.avatar}
                size={42}
                onClick={() => history.push(`profile/${user._id}`)}
              />
              <Username>@{user.username}</Username>
            </Data>
            <Time>
              há {formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}
            </Time>
          </Header>
          <Body>
            <Content>{content}</Content>
          </Body>
        </TweetContainer>
      </Container>
    );
  }

  const { user, content, createdAt } = data;

  return (
    <TweetContainer>
      <Header>
        <Data>
          <Avatar
            source={user.avatar}
            size={42}
            onClick={() => history.push(`profile/${user._id}`)}
          />
          <Username>@{user.username}</Username>
        </Data>
        <Time>
          há {formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}
        </Time>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
    </TweetContainer>
  );
}

export default Tweet;
