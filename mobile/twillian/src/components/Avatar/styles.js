import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  ${props => props.large && {
    width: '160px',
    height: '160px',
    borderRadius: '150px',
    backgroundColor: '#ffffff',
    marginTop: '-75px',
  }}
`;

export const Image = styled.Image`
  border-radius: ${props => (props.large ? '150px' : '50px')};
  width: ${props => (props.large ? '150px' : '50px')};
  height: ${props => (props.large ? '150px' : '50px')};
  ${props => props.large && { marginTop: '5px', marginLeft: '5px' }}
`;
