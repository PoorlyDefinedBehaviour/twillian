import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;

  box-shadow: ${({ theme }) => theme.shadow};

  border-radius: 5px;

  padding: 10px 20px;

  width: 500px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const Message = styled.textarea`
  background-color: transparent;

  border: 2px solid ${({ theme }) => theme.colors.primary}55;
  border-radius: 5px;

  letter-spacing: -1px;

  margin-left: 15px;
  padding: 10px 15px;

  resize: none;

  width: 100%;
  height: 65px;
`;

export const SendWrapper = styled.div`
  text-align: end;
`;

export const Send = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 20px;

  color: #fff;
  font-weight: bold;

  cursor: pointer;

  padding: 5px 15px;
`;
