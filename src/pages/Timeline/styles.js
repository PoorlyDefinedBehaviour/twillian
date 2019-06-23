import styled from "styled-components";

export const PageBox = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #f5f8fa;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #fff;
`;

export const ContainerNav = styled.div`
  padding: 10px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 62px -52px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 25px;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  color: #3d3d3d;
  width: 45px;
  line-height: 30px;
`;

export const NavDot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #1da1f2;
  border-radius: 50%;
  display: inline-block;
  margin: 2px;
`;

export const Container = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;
`;

export const Left = styled.div`
  width: 35%;
  margin-top: 8%;
`;

export const Right = styled.div`
  width: 60%;
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
`;

export const UserImage = styled.img`
  width: 40%;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -25%;
`;

export const SearchBarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SearchResultContainer = styled.div`
  z-index: 11;
  margin-top: -20px;
  margin-left: -40px;
`;
