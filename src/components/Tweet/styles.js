import styled from 'styled-components';

export const Container = styled.div``;

export const TweetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.extra_light_gray}99;

  border-radius: 5px;

  margin: 5px 0;
  padding: 10px 15px;
`;

export const RetweetWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.extra_light_gray}99;

  border-radius: 5px;

  margin-bottom: 2px;
  margin-top: 5px;
  padding: 10px 15px;
`;

export const Retweeted = styled.span`
  margin-left: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.span``;

export const Username = styled.span`
  font-size: 16px;

  margin-left: 8px;
`;

export const Body = styled.div``;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;
