import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { parseISO, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  TweetContainer,
  RetweetWrapper,
  Retweeted,
  Header,
  Data,
  Username,
  Time,
  Body,
  Content,
  Actions,
} from './styles';
import Avatar from '~/components/Avatar';
import Like from '~/components/Like';
import Retweet from '~/components/Retweet';

function Tweet({
  data, navigation, handleLike, handleRetweet,
}) {
  const currentUser = useSelector(state => state.user);

  if (data.retweeted) {
    const {
      user, content, likes, retweets, createdAt,
    } = data.retweeted;

    return (
      <Container>
        <RetweetWrapper>
          <Icon name="retweet" color="#657786" size={14} />
          <Retweeted>{data.user.username} retweetou</Retweeted>
        </RetweetWrapper>
        <TweetContainer>
          <Header>
            <Data>
              <Avatar
                source={user.avatar}
                onPress={() => navigation.navigate('Profile', { user })}
              />
              <Username>@{user.username}</Username>
            </Data>
            <Time>há {formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}</Time>
          </Header>
          <Body>
            <Content>{content}</Content>
          </Body>
          <Actions>
            <Like
              onPress={handleLike}
              liked={likes.includes(currentUser._id)}
              quantity={likes.length}
            />
            <Retweet
              onPress={handleRetweet}
              retweeted={retweets.includes(currentUser._id)}
              quantity={retweets.length}
            />
          </Actions>
        </TweetContainer>
      </Container>
    );
  }

  const {
    user, content, likes, retweets, createdAt,
  } = data;

  return (
    <TweetContainer>
      <Header>
        <Data>
          <Avatar source={user.avatar} onPress={() => navigation.navigate('Profile', { user })} />
          <Username>@{user.username}</Username>
        </Data>
        <Time>há {formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}</Time>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
      <Actions>
        <Like
          onPress={handleLike}
          liked={likes.includes(currentUser._id)}
          quantity={likes.length}
        />
        <Retweet
          onPress={handleRetweet}
          retweeted={retweets.includes(currentUser._id)}
          quantity={retweets.length}
        />
      </Actions>
    </TweetContainer>
  );
}

export default withNavigation(Tweet);
