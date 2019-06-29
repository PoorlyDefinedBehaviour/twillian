import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { getUser } from '../../services/auth';

import io from 'socket.io-client';

import { Container, CardWrapper, Wrapper, Feed, Tweets } from './styles';

import Tweet from '../../components/Tweet';
import Navbar from '../../components/Navbar';
import CardProfile from '../../components/CardProfile';
import NewTweet from '../../components/NewTweet';

export default function Timeline({ history }) {
  const user = getUser();

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following?page=1`);

        if (data.docs.length) {
          setTweets(data.docs);
        }
      } catch (error) {
        console.log('fetchTweets', error);
      }
    }

    fetchTweets();

    const socket = io('http://localhost:3333');
    socket.on('tweet', data => console.log(data));
    // eslint-disable-next-line
  }, []);

  function renderTweet(data) {
    return <Tweet key={data._id} data={data} />;
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <CardWrapper>
          <CardProfile user={user} history={history} />
        </CardWrapper>
        <Feed>
          <NewTweet user={user} />
          <Tweets>{tweets.map(renderTweet)}</Tweets>
        </Feed>
      </Wrapper>
    </>
  );
}
