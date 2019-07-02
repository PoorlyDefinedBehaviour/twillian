import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Header,
  Username,
  Info,
  Data,
  DataText,
  DataValue
} from './styles';

import Avatar from '../Avatar';

function CardProfile({ history }) {
  const user = useSelector(store => store.user);

  return (
    <Container>
      <Header>
        <Avatar
          source={user.avatar}
          onClick={() => history.push(`profile/${user._id}`)}
        />
      </Header>
      <Username>@{user.username}</Username>
      <Info>
        <Data>
          <DataText>Seguidores</DataText>
          <DataValue>{user.followers.length}</DataValue>
        </Data>
        <Data>
          <DataText>Seguindo</DataText>
          <DataValue>{user.following.length}</DataValue>
        </Data>
        <Data>
          <DataText>Tweets</DataText>
          <DataValue>0</DataValue>
        </Data>
      </Info>
    </Container>
  );
}

export default CardProfile;
