import styled from 'styled-components';

export const Touchable = styled.a`
  cursor: pointer;
`;

export const Image = styled.img`
  ${({ size }) => size >= 100 && 'border: 3px solid #fff;'};

  border-radius: 50%;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
