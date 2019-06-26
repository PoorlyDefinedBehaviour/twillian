import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.extra_extra_light_gray};

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  margin-right: 100px;
`;

export const LoginContainer = styled.div`
  background-color: #fff;

  box-shadow: ${props => props.theme.shadow};

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;

  padding: 30px;
`;

export const LoginHeader = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  color: #fff;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.primary};

  margin: 20px 0;

  padding: 10px;

  border-radius: 5px;

  cursor: pointer;

  transition: opacity 300ms ease;

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    opacity: 0.75;
  }
`;

export const Or = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const OrText = styled.span`
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: 14px;
  text-transform: lowercase;

  padding: 5px;
`;

export const RegisterButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  background-color: #fff;

  padding: 10px;

  border-radius: 5px;

  cursor: pointer;

  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    color: #fff;
  }
`;
