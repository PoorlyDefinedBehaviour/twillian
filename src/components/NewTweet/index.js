import React, { useState } from 'react';

import api from '../../services/api';

import { Container, Message, Wrapper, SendWrapper, Send } from './styles';

import Avatar from '../Avatar';

function NewTweet({ user }) {
  const [content, setContent] = useState('');

  async function sendTweet() {
    try {
      const response = await api.post('tweet', { content });
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Avatar source={user.avatar} size={48} />
        <Message
          placeholder="Escreva o que você está pensando..."
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      </Wrapper>
      <SendWrapper>
        <Send onClick={sendTweet}>Enviar</Send>
      </SendWrapper>
    </Container>
  );
}

export default NewTweet;
