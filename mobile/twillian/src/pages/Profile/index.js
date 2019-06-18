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
  const [currentUser, setCurrentUser] = useState({ following: [] });
  const [pagination, setPagination] = useState({});

  async function fetchTweets(page = 1) {
    try {
      const authenticated = await getUser();
      setCurrentUser(authenticated);

      const response = await api.get(`tweet/${user._id}/?page=${page}`);

      const { docs, ...pagination } = response.data;

      setTweets([...tweets, ...docs]);
      setPagination(pagination);
    } catch (ex) {
      console.log(ex);
    }
  }

  function fetchMore() {
    const { page, pages } = pagination;

    if (Number(page) === pages) return;

    const nextPage = Number(page) + 1;

    fetchTweets(nextPage);
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  function renderTweet({ item }) {
    return <Tweet data={item} />;
  }

  async function handleFollow() {
    const currentUser = await getUser();
    const response = await api.post(`user/${user._id}/follow`);

    setCurrentUser(response.data);

    await authenticate(response.data, currentUser.token);
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={user.avatar} large />
        </CardHeader>
        <Name>{user.username}</Name>
        {currentUser._id !== user._id && (
          <Follow onPress={handleFollow}>
            <FollowText>
              {currentUser.following.includes(user._id) ? 'Seguindo' : 'Seguir'}
            </FollowText>
          </Follow>
        )}
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
            <InfoValue>{pagination.total}</InfoValue>
          </Info>
        </InfoContainer>
      </Card>
      <Tweets
        keyboardShouldPersistTaps="handled"
        data={tweets}
        keyExtractor={item => item._id}
        renderItem={renderTweet}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.3}
      />
    </Container>
  );
}

export default {
  screen: Profile,
  navigationOptions: {
    title: 'Perfil',
  },
};
