import React, { useState } from 'react';

import { Container, Message, Send } from './styles';

import Avatar from '../Avatar';

function NewTweet({ user }) {
  const [content, setContent] = useState('');

  return (
    <Container>
      <Avatar source={user.avatar} size={64} />
      <Message
        placeholder="Escreva o que você está pensando..."
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <Send>Enviar</Send>
    </Container>
  );
}

export default NewTweet;
