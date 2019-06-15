import styled from "styled-components";

export const PageBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f8fa;
  display: flex;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerSignIn = styled.div``;

export const SignIn = styled.div`
  background-color: #fff;
  padding: 30px 10px;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 62px -52px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const SubTitle = styled.p`
  color: #aab8c2;
  font-size: 18px;
  text-align: center;
  padding: 10px;
`;

export const SignInForm = styled.form`
  width: 100%;
  text-align: center;
  padding: 10px 40px;
`;

export const UsernameInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 5px;
  width: 100%;
`;

export const PasswordInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 5px;
  width: 100%;
`;

export const SignInButton = styled.button`
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  color: #f1f1f1;
  background-color: #1da1f2;
  margin-bottom: 25px;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const LineWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #aab8c2;
`;

export const LineCenter = styled.span`
  color: #aab8c2;
  padding: 10px;
`;

export const SignUpButton = styled.button`
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  background-color: #fff;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const AppImagem = styled.img`
  cursor: pointer;
`;

export const DownloadContainer = styled.div`
  background-color: #fff;
  width: 325px;
  display: flex;
  margin-top: 15px;
  border-radius: 5px;
`;

export const AppStoreImage = styled.img`
  transform: scale(0.5);
  cursor: pointer;
  margin-left: -15%;
`;

export const GooglePlayImage = styled.img`
  transform: scale(0.5);
  cursor: pointer;
  margin-left: -25%;
`;
