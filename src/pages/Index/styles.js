import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 62px -52px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;

export const SigUpForm = styled.form`
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
export const PasswordInput = styled.input`
  font-family: "montserrat", sans-serif;
  background-color: #f4f8fa;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
`;

export const SigUpButton = styled.button`
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  width: 70%;
  color: #f1f1f1;
  background-color: #1da1f2;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
  cursor: pointer;
`;
