import styled from 'styled-components';

export const Container = styled.div``;

export const TweetContainer = styled.div`
  background-color: #fff;

  box-shadow: ${({ theme }) => theme.shadow};

  border-radius: 5px;

  margin: 10px 0;
  padding: 10px 15px;
`;

export const RetweetWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  background-color: #fff;

  box-shadow: ${({ theme }) => theme.shadow};

  border-radius: 5px;

  margin-bottom: 2px;
  padding: 10px 15px;

  position: relative;

  ::after {
    content: ' ';

    background-color: ${({ theme }) => theme.colors.primary};

    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;

    width: 5px;
    height: 65px;

    position: absolute;
    left: 0;
    top: 0;
  }
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
