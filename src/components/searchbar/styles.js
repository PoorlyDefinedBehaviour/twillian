import styled from "styled-components";

export const Form = styled.form`
  height: 25px;
  text-decoration: none;
`;

export const TextInput = styled.input`
  transform: scale(1.2);
  padding: 5px;
  border-radius: 35px;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  &:focus {
    outline: none;
    border: 1px solid #1da1f3;
  }

  &:placeholder {
    padding: 5px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: scale(1.2);
  margin-left: 20px;
`;
