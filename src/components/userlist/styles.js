import styled from "styled-components";

export const List = styled.ul`
  border: none;
  background-color: transparent;
  margin-left: -20px;
  width: 225px;
  height: 400px;
  z-index: 10;
  height: 400px;
  overflow: hidden;
  text-decoration: none;
`;

export const ListElement = styled.li`
  background-color: #fff;
  border: 2px solid #f1f1f1;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Username = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
