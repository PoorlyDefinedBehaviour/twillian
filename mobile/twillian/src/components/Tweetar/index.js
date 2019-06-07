import React, { useState } from 'react';

import {
  Container, Header, HeaderText, Message,
} from './styles';
import Avatar from '~/components/Avatar';

export default function Tweetar() {
  const [content, setContent] = useState('');

  return (
    <Container>
      <Header>
        <Avatar source="https://pbs.twimg.com/profile_images/561587399835127808/9DVFnm9G_400x400.jpeg" />
      </Header>
      <Message
        multiline
        placeholder="Escreva o que você está pensando..."
        value={content}
        onChangeText={setContent}
      />
    </Container>
  );
}
