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

export default function Timeline() {
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
        console.log("fetchtweets", data.docs);
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

  const goToProfile = user_id => {
    // redirect to profile
    console.log("gotoprofile user_id", user_id);
    console.log(tweets);
  };

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
                <UserList data={usersFound} handleClick={goToProfile} />
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
            <UserImage src={user.avatar} />
            <Name>{user.username}</Name>
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

          <>
            {tweets.map(tweet => (
              <Tweet key={tweet._id} tweet={tweet} handleClick={goToProfile} />
            ))}
          </>
        </Right>
      </Container>
    </PageBox>
  );
}
