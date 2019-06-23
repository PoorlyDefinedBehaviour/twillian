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
  UserImage,
  Name,
  SearchBarContainer,
  SearchResultContainer,
  UserInfoContainer,
  UserInfoItems,
  UserInfoItem,
  UserInfoItemDescription,
  UserInfoItemNumber
} from "./styles";

import LogoImagem from "../../assets/img/logo.png";
import DefaultUser from "../../assets/img/defaultuser.jpg";
import SearchBar from "../../components/searchbar";
import UserList from "../../components/userlist";
import Tweet from "../../components/tweet";

import api from "../../services/api";

export default function Profile(props) {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState({
    avatar: DefaultUser,
    followers: [],
    following: [],
    tweets: []
  });

  const [tweets, setTweets] = useState([]);

  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [usersFound, setUsersFound] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchBarOnFocus, setSearchBarOnFocus] = useState(false);

  useEffect(() => {
    async function getUserById() {
      try {
        const { data } = await api.get(`user/${props.match.params.user_id}`);
        setUser({ ...data.user, tweets: data.user_tweets });
      } catch (error) {
        console.log("fetchTweets", error);
        // redirect to 404;
      }
    }

    async function fetchTimeline() {
      try {
        const { data } = await api.get(
          `tweet/${props.match.params.user_id}/following?page=1`
        );

        if (data.docs) setTweets(data.docs);
      } catch (error) {
        console.log("fetchTweets", error);
        // show some error
      }
    }

    getUserById();
    fetchTimeline();
    setMounted(true);
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

  const redirect = path => {
    // redirect somewhere
  };

  return (
    mounted && (
      <PageBox>
        <Navbar>
          <ContainerNav>
            <Logo src={LogoImagem} onClick={() => redirect("timeline")} />
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
                  <UserList data={usersFound} handleClick={redirect} />
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
            <UserInfoContainer>
              <UserInfoItems>
                <UserInfoItem>
                  <UserInfoItemDescription>Tweets</UserInfoItemDescription>
                  <UserInfoItemNumber>{user.tweets.length}</UserInfoItemNumber>
                </UserInfoItem>
                <UserInfoItem>
                  <UserInfoItemDescription>Following</UserInfoItemDescription>
                  <UserInfoItemNumber>
                    {user.following.length}
                  </UserInfoItemNumber>
                </UserInfoItem>
                <UserInfoItem>
                  <UserInfoItemDescription>Followers</UserInfoItemDescription>
                  <UserInfoItemNumber>
                    {user.followers.length}
                  </UserInfoItemNumber>
                </UserInfoItem>
              </UserInfoItems>
            </UserInfoContainer>
            <>
              {tweets.map(tweet => (
                <Tweet key={tweet._id} tweet={tweet} handleClick={redirect} />
              ))}
            </>
          </Right>
        </Container>
      </PageBox>
    )
  );
}
