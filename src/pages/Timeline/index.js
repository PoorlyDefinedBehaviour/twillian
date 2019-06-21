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
  UserImage
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

  useEffect(() => {
    async function fecthTweets() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following`);
        console.log(data);

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

  const handleClick = e => {};

  return (
    <PageBox>
      <Navbar>
        <ContainerNav>
          <Logo src={LogoImagem} />
          <NavMenu onClick={handleClick}>
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
