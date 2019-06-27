import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: #fff;

  border-radius: 5px;

  padding: 10px;

  height: 100px;
`;

export const Message = styled.textarea`
  padding: 5px 10px;

  resize: none;
`;

export const Send = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 20px;

  color: #fff;
  font-weight: bold;

  padding: 5px 15px;
`;
