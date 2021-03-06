import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { getUser } from '~/services/auth';

import { withNavigation } from 'react-navigation';

import {
  Header, Username, Body, Content, Actions,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';
import Like from '~/components/Like';
import Retweet from '~/components/Retweet';
import Comment from '~/components/Comment';

function Tweet({ data, navigation }) {
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const {
    _id, user, content, likes, retweets, comments,
  } = data;

  useEffect(() => {
    async function refresh() {
      const currentUser = await getUser();
      if (likes.includes(currentUser._id)) setLiked(true);

      setCurrentUser(currentUser);
    }

    refresh();
  }, []);

  async function handleLike() {
    setLiked(!liked);

    if (!liked) {
      likes.push(currentUser._id);
    } else {
      likes.splice(likes.indexOf(currentUser._id), 1);
    }

    try {
      await api.post(`tweet/${_id}/like`);
    } catch (ex) {
      console.log(ex);
    }
  }

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
        <Retweet onPress={() => {}} quantity={retweets.length} />
        <Comment onPress={() => {}} quantity={comments.length} />
      </Actions>
    </Container>
  );
}

export default withNavigation(Tweet);
