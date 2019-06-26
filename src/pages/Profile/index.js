import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/auth';

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
  UsernameAndFollowButtonContainer,
  UserImage,
  Name,
  SearchBarContainer,
  SearchResultContainer,
  UserInfoContainer,
  UserInfoItems,
  UserInfoItem,
  UserInfoItemDescription,
  UserInfoItemNumber
} from './styles';

import LogoImagem from '../../assets/img/logo.png';
import DefaultUser from '../../assets/img/defaultuser.jpg';
import SearchBar from '../../components/SearchBar';
import UserList from '../../components/userlist';
import Tweet from '../../components/tweet';
import FollowButton from '../../components/followbutton';

import api from '../../services/api';

export default function Profile(props) {
  const [mounted, setMounted] = useState(false);
  const [should_reload, set_should_reload] = useState(false);
  const [user, setUser] = useState({
    avatar: DefaultUser,
    followers: [],
    following: [],
    tweets: []
  });

  const { _id: logged_user_id } = getUser();
  const [current_profile_id, set_current_profile_id] = useState('');

  const [tweets, setTweets] = useState([]);

  const [usernameToSearch, setUsernameToSearch] = useState('');
  const [usersFound, setUsersFound] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchBarOnFocus, setSearchBarOnFocus] = useState(false);

  useEffect(() => {
    async function getUserById() {
      try {
        const { data } = await api.get(`user/${props.match.params.user_id}`);
        setUser({ ...data.user, tweets: data.user_tweets });
        set_current_profile_id(props.match.params.user_id);
      } catch (error) {
        console.log('fetchTweets', error);
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
        console.log('fetchTweets', error);
        // show some error
      }
    }

    getUserById();
    fetchTimeline();
    setMounted(true);
    // eslint-disable-next-line
  }, [should_reload]);

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

  const follow_user = () => {
    console.log('follow user...');
  };

  const force_reload = () => set_should_reload(!should_reload);

  return (
    mounted && (
      <PageBox>
        <Navbar>
          <ContainerNav>
            <Link to="/timeline">
              <Logo src={LogoImagem} />
            </Link>
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
                    path_extractor={user => user._id}
                    force_reload={force_reload}
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
              <UserImage src={user.avatar} />
              <UsernameAndFollowButtonContainer>
                <Name>@{user.username}</Name>
                {current_profile_id !== logged_user_id && (
                  <FollowButton clickHandler={follow_user} />
                )}
              </UsernameAndFollowButtonContainer>
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
                  <UserInfoItemDescription>Seguindo</UserInfoItemDescription>
                  <UserInfoItemNumber>
                    {user.following.length}
                  </UserInfoItemNumber>
                </UserInfoItem>
                <UserInfoItem>
                  <UserInfoItemDescription>Seguidores</UserInfoItemDescription>
                  <UserInfoItemNumber>
                    {user.followers.length}
                  </UserInfoItemNumber>
                </UserInfoItem>
              </UserInfoItems>
            </UserInfoContainer>
            <>
              {tweets.map(tweet => (
                <Tweet
                  key={tweet._id}
                  tweet={tweet}
                  path_extractor={tweet => tweet.user._id}
                  force_reload={force_reload}
                />
              ))}
            </>
          </Right>
        </Container>
      </PageBox>
    )
  );
}
