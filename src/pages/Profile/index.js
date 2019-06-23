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
  UserInfoContainer,
  UserInfoItems,
  UserInfoItem,
  UserInfoItemDescription,
  UserInfoItemNumber
} from "./styles";

import LogoImagem from "../../assets/img/logo.png";
import SearchBar from "../../components/searchbar";
import UserList from "../../components/userlist";
import Tweet from "../../components/tweet";

import api from "../../services/api";

export default function Profile(props) {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [usersFound, setUsersFound] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchBarOnFocus, setSearchBarOnFocus] = useState(false);

  useEffect(() => {
    async function getUserById() {
      try {
        const { data } = await api.get(`user/${props.match.params.user_id}`);

        setUser(data);
        console.log("user", data);
      } catch (error) {
        console.log("fetchTweets", error);
        // redirect to 404;
      }
    }

    async function fetchTimeline() {
      try {
        const { data } = await api.get(`tweet/${user._id}/following?page=1`);

        console.log("fetchedtweets", data);
        if (data.length) setTweets(data);
      } catch (error) {
        console.log("fetchTweets", error);
        // show some error
      }
    }

    getUserById();
    fetchTimeline();
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
            {searchBarOnFocus && (
              <UserList data={usersFound} handleClick={goToProfile} />
            )}
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
                <UserInfoItemDescription>
                  {user.following.length}
                </UserInfoItemDescription>
                <UserInfoItemNumber>123</UserInfoItemNumber>
              </UserInfoItem>
              <UserInfoItem>
                <UserInfoItemDescription>
                  {user.followers.length}
                </UserInfoItemDescription>
                <UserInfoItemNumber>123</UserInfoItemNumber>
              </UserInfoItem>
            </UserInfoItems>
          </UserInfoContainer>
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
