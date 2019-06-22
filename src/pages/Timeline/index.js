import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";

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
  SearchForm,
  SearchButton,
  SearchInput
} from "./styles";

import LogoImagem from "../../assets/img/logo.png";
import DefaultUser from "../../assets/img/defaultuser.jpg";

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
    }
  ]);

  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [usersFound, setUsersFound] = useState([]);

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

  useEffect(() => {
    async function searchForUser() {
      if (!searching) return;

      try {
        if (!usernameToSearch) return;

        const { data: users } = await api.get(`search/${usernameToSearch}`);
        setUsersFound(users);
      } catch (error) {
        console.log("handleUsernameSearch", error);
      } finally {
        setSearching(false);
      }
    }

    searchForUser();
  }, [usernameToSearch]);

  return (
    <PageBox>
      <Navbar>
        <ContainerNav>
          <Logo src={LogoImagem} />
          <SearchForm
            onChange={e => setUsernameToSearch(e.target.value)}
            onSubmit={event => {
              event.preventDefault();
              setSearching(true);
            }}
          >
            <SearchInput
              placeholder="Procurar"
              onChange={e => setUsernameToSearch(e.target.value)}
              value={usernameToSearch}
            />
            <SearchButton>
              <MdSearch />
            </SearchButton>
          </SearchForm>
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
              <Card key={String(Symbol())}>
                <CardHeader>
                  <Avatar src={DefaultUser} />
                  <Name>{tweet.user.username}</Name>
                </CardHeader>
                <Body>
                  <Content>{tweet.content}</Content>
                </Body>
              </Card>
            ))}
          </>
        </Right>
      </Container>
    </PageBox>
  );
}
