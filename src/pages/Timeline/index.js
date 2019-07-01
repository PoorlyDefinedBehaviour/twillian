import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import io from 'socket.io-client';

import { Container, Tweets } from './styles';
import NewTweet from '~/components/NewTweet';
import Tweet from '~/components/Tweet';

function Timeline() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { data: tweets, pagination } = useSelector(state => state.timeline);

  const [refreshing, setRefreshing] = useState(false);

  async function fetchTweets(page = 1) {
    try {
      const response = await api.get(`tweet/${user._id}/following/?page=${page}`);

      const { docs, ...rest } = response.data;

      dispatch({ type: 'FETCH_TWEETS', data: docs, pagination: rest });
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    function subscribe() {
      const socket = io('https://twillian-api.herokuapp.com');

      socket.on('tweet', (tweet) => {
        if (user.following.includes(tweet.user._id)) {
          dispatch({ type: 'NEW_TWEET', tweet });
        }
      });
    }

    fetchTweets();
    subscribe();
  }, []);

  function fetchMore() {
    const { page, pages } = pagination;

    if (Number(page) === pages) return;

    const nextPage = Number(page) + 1;

    fetchTweets(nextPage);
  }

  async function reloadTweets() {
    try {
      setRefreshing(true);

      const response = await api.get(`tweet/${user._id}/following/?page=1`);

      const { docs, ...rest } = response.data;

      dispatch({ type: 'RELOAD_TWEETS', data: docs, pagination: rest });
    } catch (ex) {
      console.log(ex);
    } finally {
      setRefreshing(false);
    }
  }

  async function handleLike(_id) {
    try {
      const response = await api.post(`tweet/${_id}/like`);
      dispatch({
        type: 'REFRESH_TWEETS',
        data: tweets.map(tweet => (tweet._id !== _id ? tweet : response.data)),
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  async function handleRetweet(item) {
    const _id = item.retweeted ? item.retweeted._id : item._id;

    try {
      const response = await api.post(`tweet/${_id}/retweet`);

      dispatch({
        type: 'REFRESH_TWEETS',
        data: tweets.map(tweet => (tweet._id === _id ? response.data.tweet : tweet)),
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  function renderTweet({ item }) {
    return (
      <Tweet
        data={item}
        handleLike={() => handleLike(item._id)}
        handleRetweet={() => handleRetweet(item)}
      />
    );
  }

  return (
    <Container>
      <NewTweet />
      <Tweets
        keyboardShouldPersistTaps="handled"
        data={tweets}
        keyExtractor={item => item._id}
        renderItem={renderTweet}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.3}
        refreshControl={
          <RefreshControl refreshing={refreshing} colors={['#1da1f2']} onRefresh={reloadTweets} />
        }
      />
    </Container>
  );
}

export default {
  screen: Timeline,
  navigationOptions: {
    title: 'Últimos tweets',
  },
};
