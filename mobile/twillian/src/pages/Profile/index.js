import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import {
  Container,
  Card,
  CardHeader,
  Name,
  InfoContainer,
  Info,
  InfoHeader,
  InfoValue,
  Tweets,
} from './styles';
import Avatar from '~/components/Avatar';
import Tweet from '~/components/Tweet';

function Profile({ navigation }) {
  const user = navigation.getParam('user');

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await api.get(`tweet/${user._id}/`);
        setTweets(response.data);
      } catch (ex) {
        console.log(ex);
      }
    }

    fetchTweets();
  }, []);

  function renderTweet({ item }) {
    return <Tweet data={item} />;
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={user.avatar} large />
        </CardHeader>
        <Name>{user.username}</Name>
        <InfoContainer>
          <Info>
            <InfoHeader>Seguidores</InfoHeader>
            <InfoValue>{user.followers.length}</InfoValue>
          </Info>
          <Info>
            <InfoHeader>Seguindo</InfoHeader>
            <InfoValue>{user.following.length}</InfoValue>
          </Info>
          <Info>
            <InfoHeader>Tweets</InfoHeader>
            <InfoValue>{tweets.length}</InfoValue>
          </Info>
        </InfoContainer>
      </Card>
      <Tweets data={tweets} keyExtractor={item => item._id} renderItem={renderTweet} />
    </Container>
  );
}

export default {
  screen: Profile,
  navigationOptions: {
    title: 'Perfil',
  },
};
