import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { getUser } from '~/services/auth';

import { Container, Tweets } from './styles';
import NewTweet from '~/components/NewTweet';
import Tweet from '~/components/Tweet';

function Timeline() {
  const [tweets, setTweets] = useState([]);
  const [pagination, setPagination] = useState({});

  async function fetchTweets(page = 1) {
    const user = await getUser();

    try {
      const response = await api.get(`tweet/${user._id}/following/?page=${page}`);

      const { docs, ...pagination } = response.data;

      setTweets([...tweets, ...docs]);
      setPagination(pagination);
    } catch (ex) {
      console.log(ex.response);
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
