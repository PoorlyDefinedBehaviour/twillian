import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #1099f7;
  color: #1099f7;
  font-weight: bold;
  padding: 10px 15px 10px 15px;
  border-radius: 35px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #1099f1;
    color: #fff;
  }
`;
