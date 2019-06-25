import styled from "styled-components";

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

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
`;

export const Username = styled.h2`
  color: #14171a;
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
`;

export const CardContentContainer = styled.div`
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 10px;
  color: #657786;
`;
