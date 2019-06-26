import styled from 'styled-components';

export const Field = styled.input`
  background-color: ${({ theme }) => theme.colors.extra_extra_light_gray};

  border-radius: 5px;

  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.extra_extra_light_gray};

  padding: 15px;
  margin-bottom: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark_gray};
  }

  &:focus {
    border: 1px solid
      ${({ error, theme }) =>
        error ? theme.colors.error : theme.colors.primary};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;

  margin-bottom: 10px;
`;
