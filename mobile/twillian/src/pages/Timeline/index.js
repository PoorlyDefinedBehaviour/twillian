import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, Tweets } from './styles';
import NewTweet from '~/components/NewTweet';
import Tweet from '~/components/Tweet';

function Timeline({ navigation }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {}, []);

  function renderTweet({ item }) {
    return (
      <Tweet
        author={item.author}
        content={item.content}
        likes={item.likes}
        retweets={item.retweets}
        comments={item.comments}
      />
    );
  }

  return (
    <Container>
      <NewTweet />
      <Tweets data={tweets} keyExtractor={item => `tweet-${item.id}`} renderItem={renderTweet} />
    </Container>
  );
}

export default {
  screen: Timeline,
  navigationOptions: {
    title: 'Últimos tweets',
  },
};
