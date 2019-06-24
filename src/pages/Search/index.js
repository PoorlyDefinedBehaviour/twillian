import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Avatar from '~/components/Avatar';
import FollowButton from '~/components/FollowButton';

import {
  Container, Users, User, Data, Username,
} from './styles';

function Search({ navigation }) {
  const keyword = navigation.getParam('keyword');

  const [users, setUsers] = useState({ data: [], pagination: {} });

  async function fetchUsers(page = 1) {
    try {
      const response = await api.get(`search/${keyword}?page=${page}`);

      const { docs, ...pagination } = response.data;

      setUsers({ data: [...users.data, ...docs], pagination });
    } catch (ex) {
      console.log(ex);
    }
  }

  async function fetchMore() {
    const { page, pages } = users.pagination;

    if (Number(page) === pages) return;

    const nextPage = Number(page) + 1;

    fetchUsers(nextPage);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function renderUser({ item }) {
    return (
      <User>
        <Data>
          <Avatar source={item.avatar} />
          <Username>@{item.username}</Username>
        </Data>
        <FollowButton user={item} />
      </User>
    );
  }

  return (
    <Container>
      <Users
        keyboardShouldPersistTaps="handled"
        data={users.data}
        keyExtractor={item => item._id}
        renderItem={renderUser}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.3}
      />
    </Container>
  );
}

export default Search;
