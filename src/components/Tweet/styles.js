import styled from 'styled-components/native';

export const Container = styled.View``;

export const TweetContainer = styled.View`
  background-color: #f5f8fa;
  border-radius: 5px;

  margin: 5px 15px;
  padding: 10px 15px;
`;

export const RetweetWrapper = styled.View`
  background-color: #f5f8fa;
  border-radius: 5px;

  margin: 5px 15px 2px 15px;
  padding: 10px 15px;

  flex-direction: row;
  align-items: center;
`;

export const Retweeted = styled.Text`
  margin-left: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5px;
`;

export const Data = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text``;

export const Username = styled.Text`
  font-size: 16px;

  margin-left: 8px;
`;

export const Body = styled.View``;

export const Content = styled.Text`
  color: #14171a;
`;

export const Actions = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
