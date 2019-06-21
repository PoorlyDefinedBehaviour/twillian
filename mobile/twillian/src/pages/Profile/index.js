import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import Avatar from '~/components/Avatar';
import Tweet from '~/components/Tweet';

import ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
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

function Profile({ navigation }) {
  const dispatch = useDispatch();

  const user = navigation.getParam('user');
  const currentUser = useSelector(state => state.user);
  const { data: tweets, pagination } = useSelector(state => state.profile);

  const [sending, setSending] = useState(false);

  async function fetchTweets(page = 1) {
    try {
      const response = await api.get(`tweet/${user._id}/?page=${page}`);

      const { docs, ...rest } = response.data;

      dispatch({
        type: 'FETCH_PROFILE',
        profile: user,
        data: page === 1 ? docs : [...tweets, ...docs],
        pagination: rest,
      });
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

  async function handleFollow() {
    const response = await api.post(`user/${user._id}/follow`);
    dispatch({ type: 'SET_USER', user: response.data, token: currentUser.token });
  }

  async function handleAvatar() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione sua foto de perfil',
        cancelButtonTitle: 'Cancelar',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        takePhotoButtonTitle: 'Tirar uma foto',
        quality: 0.7,
      },
      async (response) => {
        if (response.error || response.didCancel) return;

        setSending(true);

        let prefix;
        let ext;

        if (response.fileName) {
          [prefix, ext] = response.fileName.split('.');
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const data = new FormData();
        data.append('file', {
          uri: response.uri,
          type: response.type,
          name: `${prefix}.${ext}`,
        });

        try {
          const response = await api.post('upload', data);

          dispatch({ type: 'CHANGE_AVATAR', avatar: response.data.url });
          console.log(currentUser);
        } catch (ex) {
          console.log(ex);
        } finally {
          setSending(false);
        }
      },
    );
  }

  async function handleLike(_id) {
    try {
      const response = await api.post(`tweet/${_id}/like`);
      dispatch({
        type: 'PROFILE_REFRESH_TWEETS',
        data: tweets.map(tweet => (tweet._id !== _id ? tweet : response.data)),
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async function handleRetweet(_id) {
    try {
      const response = await api.post(`tweet/${_id}/retweet`);
      dispatch({
        type: 'PROFILE_REFRESH_TWEETS',
        data: tweets.map(tweet => (tweet._id !== _id ? tweet : response.data)),
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  function renderTweet({ item }) {
    if (item.user._id === currentUser._id) {
      item.user = currentUser;
    }

    return (
      <Tweet
        data={item}
        handleLike={() => handleLike(item._id)}
        handleRetweet={() => handleRetweet(item._id)}
      />
    );
  }

  function renderFollow() {
    if (currentUser._id !== user._id) {
      return (
        <Follow onPress={handleFollow}>
          <FollowText>
            {currentUser.following.includes(user._id) ? 'Seguindo' : 'Seguir'}
          </FollowText>
        </Follow>
      );
    }

    return null;
  }

  return (
    <Container>
      <Spinner visible={sending} />
      <Card>
        <CardHeader>
          <Avatar
            source={user._id === currentUser._id ? currentUser.avatar : user.avatar}
            large
            onPress={user._id === currentUser._id ? handleAvatar : undefined}
          />
        </CardHeader>
        <Name>{user.username}</Name>
        {renderFollow()}
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
