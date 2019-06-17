import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { getUser, authenticate } from '~/services/auth';

import {
  Container,
  Card,
  CardHeader,
  Name,
  Follow,
  FollowText,
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
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await api.get(`tweet/${user._id}/`);
        setTweets(response.data);

        const currentUser = await getUser();
        setFollowing(currentUser.following.includes(user._id));
      } catch (ex) {
        console.log(ex);
      }
    }

    fetchTweets();
  }, []);

  function renderTweet({ item }) {
    return <Tweet data={item} />;
  }

  async function handleFollow() {
    setFollowing(!following);

    const currentUser = await getUser();
    const response = await api.post(`user/${user._id}/follow`);

    await authenticate(response.data, currentUser.token);
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={user.avatar} large />
        </CardHeader>
        <Name>{user.username}</Name>
        <Follow onPress={handleFollow}>
          <FollowText>{following ? 'Seguindo' : 'Seguir'}</FollowText>
        </Follow>
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
