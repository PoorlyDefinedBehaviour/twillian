import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  box-shadow: ${({ theme }) => theme.shadow};

  border-radius: 5px;

  margin-bottom: 100px;
  padding: 15px 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  margin-top: -70px;
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: bold;

  margin: 10px 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-left: 15px;
  }
`;

export const DataText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: bold;
`;

export const DataValue = styled.span`
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 14px;
`;
