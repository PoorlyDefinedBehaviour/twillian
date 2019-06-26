import styled from 'styled-components';

import { MdSearch } from 'react-icons/md';

export const Container = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px 15px;

  border-radius: 35px;
  border: 1px solid ${({ theme }) => theme.colors.extra_extra_light_gray};

  background-color: ${({ theme }) => theme.colors.extra_extra_light_gray};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchWrapper = styled.button`
  cursor: pointer;

  position: relative;
`;

export const SearchIcon = styled(MdSearch).attrs(({ theme }) => ({
  color: theme.colors.primary
}))`
  position: absolute;
  right: 10px;
  top: -10px;
`;
