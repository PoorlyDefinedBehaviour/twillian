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
  Body,
  Content,
  UserImage,
  SearchBarContainer
} from "./styles";

import LogoImagem from "../../assets/img/logo.png";
import DefaultUser from "../../assets/img/defaultuser.jpg";
import SearchBar from "../../components/searchbar";
import UserList from "../../components/userlist";
import Tweet from "../../components/tweet";

import api from "../../services/api";
import { getUser } from "../../services/auth";

export default function Timeline() {
  const user = getUser();

  const [tweets, setTweets] = useState([
    {
      user: {
        username: "test"
      },
      content: "hello world"
    },
    {
      user: {
        username: "test"
      },
      content: "hello world"
    },
    {
      user: {
        username: "test"
      },
      content: "hello world"
    }
  ]);

  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [usersFound, setUsersFound] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchBarOnFocus, setSearchBarOnFocus] = useState(false);

  useEffect(() => {
    async function fecthTweets() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following`);

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

  return (
    <PageBox>
      <Navbar>
        <ContainerNav>
          <Logo src={LogoImagem} />
          <SearchBarContainer>
            <SearchBar
              handleFocus={() => setSearchBarOnFocus(true)}
              handleBlur={() => setSearchBarOnFocus(false)}
              handleSubmit={e => {
                e.preventDefault();
                searchForUser();
              }}
              handleChange={e => setUsernameToSearch(e.target.value)}
              placeholder="Procurar"
            />
            {searchBarOnFocus && <UserList data={usersFound} />}
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
            <CardHeader>
              <Avatar src={DefaultUser} />
              <CardMessage
                multiline
                placeholder="Escreva o que você está pensando..."
              />
            </CardHeader>
          </Card>

          <>
            {tweets.map(tweet => (
              <Tweet tweet={tweet} />
            ))}
          </>
        </Right>
      </Container>
    </PageBox>
  );
}
