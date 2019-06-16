import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { getUser } from '~/services/auth';

import { Container, Tweets } from './styles';
import NewTweet from '~/components/NewTweet';
import Tweet from '~/components/Tweet';

function Timeline() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      const user = await getUser();

      try {
        const response = await api.get(`tweet/${user._id}/following/0`);
        setTweets(response.data);
      } catch (ex) {
        console.log(ex.response);
      }
    }

    fetchTweets();
  }, []);

  function renderTweet({ item }) {
    return <Tweet data={item} />;
  }

  return (
    <Container>
      <NewTweet />
      <Tweets data={tweets} keyExtractor={item => item._id} renderItem={renderTweet} />
    </Container>
  );
}

export default {
  screen: Timeline,
  navigationOptions: {
    title: 'Últimos tweets',
  },
};
