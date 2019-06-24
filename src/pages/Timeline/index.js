import React, { useState, useEffect } from "react";

import {
  PageBox,
  ContainerNav,
  Navbar,
  NavMenu,
  Logo,
  NavDot,
  Container,
  Left,
  Right,
  Card,
  CardHeader,
  CardMessage,
  Avatar,
  Name,
  UserImage,
  SearchBarContainer,
  TweetForm,
  SearchResultContainer
} from "./styles";

import LogoImagem from "../../assets/img/logo.png";
import SearchBar from "../../components/searchbar";
import UserList from "../../components/userlist";
import Tweet from "../../components/tweet";

import api from "../../services/api";
import { getUser } from "../../services/auth";

export default function Timeline(props) {
  const user = getUser();

  const [tweets, setTweets] = useState([]);

  const [newTweet, setNewTweet] = useState("");
  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [usersFound, setUsersFound] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchBarOnFocus, setSearchBarOnFocus] = useState(false);

  useEffect(() => {
    async function fecthTweets() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following?page=1`);

        if (data.docs.length) {
          setTweets(data.docs);
        }
      } catch (error) {
        console.log("fetchTweets", error);
      }
    }

    fecthTweets();
    // eslint-disable-next-line
  }, []);

  const searchForUser = async () => {
    if (!usernameToSearch || searching) return;

    try {
      setSearching(true);
      const { data: users } = await api.get(`search/${usernameToSearch}`);
      setUsersFound(users.docs);
    } catch (error) {
    } finally {
      setSearching(false);
    }
  };

  const handleTweetSubmit = async event => {
    console.log("submitting tweet");

    event.preventDefault();

    if (!newTweet) return;

    try {
      const { data } = await api.post("tweet", { content: newTweet });
      console.log("new tweet", data);
    } catch (error) {
      console.log("handletweetsubmit", error);
    } finally {
      setNewTweet("");
    }
  };

  const redirect = path => props.history.push(path, null);

  return (
    <PageBox>
      <Navbar>
        <ContainerNav>
          <Logo src={LogoImagem} />
          <SearchBarContainer>
            <SearchBar
              handleFocus={() => setSearchBarOnFocus(true)}
              handleBlur={() =>
                setTimeout(() => setSearchBarOnFocus(false), 100)
              }
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
        </ContainerNav>
      </Navbar>
      <Container>
        <Left>
          <Card>
            <UserImage
              src={user.avatar}
              onClick={() => redirect(`profile/${user._id}`)}
            />
            <Name onClick={() => redirect(`profile/${user._id}`)}>
              {user.username}
            </Name>
          </Card>
        </Left>
        <Right>
          <Card>
            <TweetForm onSubmit={handleTweetSubmit}>
              <CardHeader>
                <Avatar src={user.avatar} />
                <CardMessage
                  onChange={e => setNewTweet(e.target.value)}
                  multiline
                  placeholder="Escreva o que você está pensando..."
                />
              </CardHeader>
            </TweetForm>
          </Card>

          {tweets.map(tweet => (
            <Tweet
              key={tweet._id}
              tweet={tweet}
              path_extractor={tweet => `profile/${tweet.user._id}`}
            />
          ))}
        </Right>
      </Container>
    </PageBox>
  );
}
