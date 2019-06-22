import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { parseISO, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Header, Data, Username, Time, Body, Content, Actions,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';
import Like from '~/components/Like';
import Retweet from '~/components/Retweet';
import Comment from '~/components/Comment';

function Tweet({
  data, navigation, handleLike, handleRetweet,
}) {
  const currentUser = useSelector(state => state.user);

  const {
    user, content, likes, retweets, comments, createdAt,
  } = data;

  return (
    <Container>
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
        <Comment
          onPress={() => {}}
          commented={comments.includes(currentUser._id)}
          quantity={comments.length}
        />
      </Actions>
    </Container>
  );
}

export default withNavigation(Tweet);
