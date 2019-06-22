import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  ${props => props.large && {
    width: 160,
    height: 160,
    borderRadius: 150,
    backgroundColor: '#f5f8fa',
    marginTop: -75,
  }}
`;

export const Container = styled.View`
  ${props => props.large && {
    width: 160,
    height: 160,
    borderRadius: 150,
    backgroundColor: '#f5f8fa',
    marginTop: -75,
  }}
`;

export const Image = styled.Image`
  border-radius: ${props => (props.large ? '150px' : '50px')};
  width: ${props => (props.large ? '150px' : '50px')};
  height: ${props => (props.large ? '150px' : '50px')};
  ${props => props.large && { marginTop: '5px', marginLeft: '5px' }}
`;
