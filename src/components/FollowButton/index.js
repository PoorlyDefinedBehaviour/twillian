import React from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import { Follow, FollowText } from './styles';

function FollowButton({ user }) {
  const currentUser = useSelector(state => state.user);

  if (currentUser._id === user._id) {
    return null;
  }

  const following = currentUser.following.includes(user._id);

  async function handleFollow() {
    const response = await api.post(`user/${user._id}/follow`);
    dispatch({ type: 'SET_USER', user: response.data, token: currentUser.token });
  }

  return (
    <Follow onPress={handleFollow}>
      <FollowText>{following ? 'Seguindo' : 'Seguir'}</FollowText>
    </Follow>
  );
}

export default FollowButton;
