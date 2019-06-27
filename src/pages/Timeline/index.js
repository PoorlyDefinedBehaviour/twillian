import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { getUser } from '../../services/auth';

import {
  PageBox,
  Container,
  Left,
  Right,
  Card,
  CardHeader,
  CardMessage,
  Name,
  UserImage,
  TweetForm,
  Feed
} from './styles';

import Tweet from '../../components/tweet';
import Navbar from '../../components/Navbar';
import CardProfile from '../../components/CardProfile';
import NewTweet from '../../components/NewTweet';

export default function Timeline({ history }) {
  const user = getUser();

  const [tweets, setTweets] = useState([]);

  const [newTweet, setNewTweet] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    async function fecthTweets() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following?page=1`);

        if (data.docs.length) {
          setTweets(data.docs);
        }
      } catch (error) {
        console.log('fetchTweets', error);
      }
    }

    fecthTweets();
    // eslint-disable-next-line
  }, []);

  const handleTweetSubmit = async event => {
    event.preventDefault();

    if (!newTweet) return;

    try {
      const { data } = await api.post('tweet', { content: newTweet });
      console.log(data.tweet);
      setTweets([data.tweet, ...tweets]);
    } catch (error) {
      console.log('handletweetsubmit', error);
    } finally {
      setNewTweet('');
    }
  };

  const redirect = path => history.push(path, null);

  return (
    <PageBox>
      <Navbar />
      {/* <ContainerNav>
        <Logo src={LogoImagem} />
        <SearchBarContainer>
          <SearchBar
            handleFocus={() => setSearchBarOnFocus(true)}
            handleBlur={() => setTimeout(() => setSearchBarOnFocus(false), 100)}
            handleSubmit={e => {
              e.preventDefault();
              searchForUser();
            }}
            handleChange={e => setUsernameToSearch(e.target.value)}
            placeholder="Procurar"
          />
          <SearchResultContainer>
            {searchBarOnFocus && (
              <UserList
                data={usersFound}
                path_extractor={user => `profile/${user._id}`}
              />
            )}
          </SearchResultContainer>
        </SearchBarContainer>
        <NavMenu>
          <NavDot />
          <NavDot />
          <NavDot />
        </NavMenu>
      </ContainerNav> */}
      <Container>
        <CardProfile user={user} history={history} />
        <Feed>
          <NewTweet user={user} />
        </Feed>
        {/* <Right>
          <Card>
            <TweetForm onSubmit={handleTweetSubmit}>
              <CardHeader>
                <Avatar source={user.avatar} size={75} />
                <CardMessage
                  onChange={e => setNewTweet(e.target.value)}
                  multiline
                  placeholder="Escreva o que você está pensando..."
                />
              </CardHeader>
            </TweetForm>
          </Card> */}

        {/* {tweets.map(tweet => (
          <Tweet
            key={tweet._id}
            tweet={tweet}
            path_extractor={tweet => `profile/${tweet.user._id}`}
          />
        ))} */}
      </Container>
    </PageBox>
  );
}
