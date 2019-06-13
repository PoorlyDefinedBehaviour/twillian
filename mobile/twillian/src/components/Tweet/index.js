import React, { useState } from 'react';

import { withNavigation } from 'react-navigation';

import {
  Header, Author, Username, Body, Content, Actions,
} from './styles';
import Container from '~/components/Container';
import Avatar from '~/components/Avatar';
import Like from '~/components/Like';
import Action from '~/components/Action';

function Tweet({
  author, content, likes, retweets, comments, navigation,
}) {
  const user = {
    name: author.name,
    avatar: author.avatar,
    followers: 5,
    following: 5,
    tweets: ['', ''],
  };
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Header>
        <Avatar source={author.avatar} onPress={() => navigation.push('Profile', { user })} />
        <Author>{author.name}</Author>
        <Username>{author.username}</Username>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
      <Actions>
        <Like
          onPress={() => {
            setLiked(!liked);
            console.log(liked);
          }}
          liked={liked}
          quantity={likes}
        />
        <Action name="retweet" color="#14171a" quantity={retweets} />
        <Action name="comment-alt" color="#14171a" quantity={comments} />
      </Actions>
    </Container>
  );
}

export default withNavigation(Tweet);
