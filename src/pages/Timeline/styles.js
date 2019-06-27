import styled from 'styled-components';

export const PageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.extra_extra_light_gray};
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 50px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 3px 62px -52px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TweetForm = styled.form``;

export const CardMessage = styled.input`
  border: none;
  width: 100%;
  margin-left: 5px;
  padding: 10px;
  font-size: 16px;
  color: #14171a;
  text-decoration: none;
`;

export const Name = styled.h2`
  color: #14171a;
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
`;
export const Body = styled.div`
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 10px;
  color: #657786;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserImage = styled.img`
  width: 40%;
  border-radius: 50%;
  border: 3px solid #fff;
  cursor: pointer;
`;

export const SearchBarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SearchResultContainer = styled.div`
  z-index: 11;
  margin-top: 5px;
`;

export const Feed = styled.div`
  margin-left: 80px;
`;
