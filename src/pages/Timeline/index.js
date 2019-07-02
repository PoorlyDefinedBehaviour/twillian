import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';

import io from 'socket.io-client';

import InfiniteScroll from 'react-infinite-scroller';

import { Container, Wrapper, Feed, Tweets } from './styles';

import Tweet from '../../components/Tweet';
import Navbar from '../../components/Navbar';
import CardProfile from '../../components/CardProfile';
import NewTweet from '../../components/NewTweet';

export default function Timeline({ history }) {
  const dispatch = useDispatch();
  const { data: tweets, pagination } = useSelector(store => store.timeline);
  const user = useSelector(store => store.user);

  async function fetchTweets(page = 1) {
    try {
      const response = await api.get(
        `tweet/${user._id}/following/?page=${page}`
      );

      const { docs, ...rest } = response.data;

      dispatch({ type: 'FETCH_TWEETS', data: docs, pagination: rest });
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

    function subscribe() {
      const socket = io('https://twillian-api.herokuapp.com');

      socket.on('tweet', tweet => console.log(tweet));
    }

    subscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function renderTweet(data) {
    return <Tweet key={data._id} data={data} history={history} />;
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <CardProfile history={history} />
        </Container>
        <Feed>
          <NewTweet />
          <InfiniteScroll
            loadMore={fetchMore}
            hasMore={Number(pagination.page) < pagination.pages}
          >
            <Tweets>{tweets.map(renderTweet)}</Tweets>
          </InfiniteScroll>
        </Feed>
      </Wrapper>
    </>
  );
}
