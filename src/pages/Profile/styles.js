import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #e1e8ed;
`;

export const Card = styled.View`
  align-items: center;

  background-color: #f5f8fa;

  border-radius: 5px;
  margin: 0 15px;
  margin-top: 80px;
  margin-bottom: 10px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  align-items: center;
`;

export const Name = styled.Text`
  color: #14171a;
  font-size: 24px;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Follow = styled.TouchableOpacity`
  background-color: #1da1f2;

  border-radius: 25px;
  margin-bottom: 10px;
  padding: 5px 20px;
`;

export const FollowText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
`;

export const Info = styled.View`
  align-items: center;
  margin-right: 15px;
`;

export const InfoHeader = styled.Text`
  color: #14171a;
  font-size: 16px;
  font-weight: bold;
`;

export const InfoValue = styled.Text`
  color: #aab8c2;
  font-weight: 100;
`;

export const Tweets = styled.FlatList``;
