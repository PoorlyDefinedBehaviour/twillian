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
import Action from '~/components/Action';

function Tweet({ data, navigation }) {
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const {
    _id, user, content, likes, retweets, comments,
  } = data;

  useEffect(() => {
    getUser().then((currentUser) => {
      if (likes.includes(currentUser._id)) setLiked(true);
    });
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
        <Action name="retweet" color="#14171a" quantity={retweets.length} />
        <Action name="comment-alt" color="#14171a" quantity={comments.length} />
      </Actions>
    </Container>
  );
}

export default withNavigation(Tweet);
