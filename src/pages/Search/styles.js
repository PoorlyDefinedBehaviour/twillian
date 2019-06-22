import styled from 'styled-components/native';

export const Container = styled.View``;

export const Users = styled.FlatList``;

export const User = styled.View`
  border-bottom-color: #eee;
  border-bottom-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
`;

export const Data = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Username = styled.Text`
  color: #14171a;
  font-size: 16px;
  font-weight: bold;

  margin-left: 15px;
`;

export const FollowWrapper = styled.View``;
