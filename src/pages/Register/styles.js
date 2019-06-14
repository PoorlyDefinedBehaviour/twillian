import styled from "styled-components";

export const PageBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e6ecf0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fff;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterForm = styled.form`
  width: 80%;
  text-align: center;
  margin-top: 25%;
`;

export const UsernameInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f5f8f1;
  padding: 15px;
  margin: 10px;
  border-radius: 2px;
`;

export const EmailInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f5f8f1;
  padding: 15px;
  margin: 10px;
  border-radius: 2px;
`;

export const PasswordInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f5f8f1;
  padding: 15px;
  margin: 10px;
  border-radius: 2px;
`;

export const RegisterButton = styled.button`
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  width: 80%;
  color: #f1f1f1;
  background-color: #1da1f2;
  padding: 15px;
  margin-top 20px;
  border-radius: 2px;
`;
