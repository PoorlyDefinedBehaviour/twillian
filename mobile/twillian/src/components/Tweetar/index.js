import React, { useState } from 'react';

import {
  Container, Header, Message, Footer, Characters, Send, SendText,
} from './styles';
import Avatar from '~/components/Avatar';

export default function Tweetar() {
  const [content, setContent] = useState('');

  const maxCharacters = 128;
  function handleContent(content) {
    if (content.length < 128) {
      setContent(content);
    }
  }

  return (
    <Container>
      <Header>
        <Avatar source="https://pbs.twimg.com/profile_images/561587399835127808/9DVFnm9G_400x400.jpeg" />
        <Message
          multiline
          placeholder="Escreva o que você está pensando..."
          value={content}
          onChangeText={handleContent}
        />
      </Header>
      <Footer>
        <Characters>
          {content.length}/{maxCharacters}
        </Characters>
        <Send>
          <SendText>Tweetar</SendText>
        </Send>
      </Footer>
    </Container>
  );
}
