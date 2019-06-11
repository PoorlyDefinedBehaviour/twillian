import React, { useState } from 'react';

import {
  Container, Header, Message, Footer, Characters, Send, SendText,
} from './styles';
import Avatar from '~/components/Avatar';

export default function NewTweet({ navigation }) {
  const [content, setContent] = useState('');
  const maxCharacters = 128;

  return (
    <Container>
      <Header>
        <Avatar
          source="https://pbs.twimg.com/profile_images/561587399835127808/9DVFnm9G_400x400.jpeg"
          onPress={() => navigation.push('Profile', { user })}
        />
        <Message
          multiline
          placeholder="Escreva o que você está pensando..."
          maxLength={maxCharacters}
          value={content}
          onChangeText={setContent}
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
