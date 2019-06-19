import styled from "styled-components";

export const DefaultUserImage = styled.img`
  width: 40%;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -20%;
`;

export const PageBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f8fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fff;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 62px -52px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;

export const RegisterForm = styled.form`
  width: 80%;
  text-align: center;
`;

export const UsernameInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
`;

export const EmailInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
`;

export const PasswordInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
`;

export const RegisterButton = styled.button`
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  width: 75%;
  color: #f1f1f1;
  background-color: #1da1f2;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
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
