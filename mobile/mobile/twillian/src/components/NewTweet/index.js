import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { getUser } from '~/services/auth';

import { withNavigation } from 'react-navigation';

import {
  Container, Header, Message, Footer, Characters, Send, SendText,
} from './styles';
import Avatar from '~/components/Avatar';

function NewTweet({ navigation }) {
  const [content, setContent] = useState('');
  const maxCharacters = 128;

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  async function sendTweet() {
    try {
      await api.post('tweet', { content });
      setContent('');
    } catch (ex) {
      // TODO: Handle exception
    }
  }

  return (
    <Container>
      <Header>
        <Avatar source={user.avatar} onPress={() => navigation.push('Profile', { user })} />
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
        <Send onPress={sendTweet} disabled={content.length == 0}>
          <SendText>Tweetar</SendText>
        </Send>
      </Footer>
    </Container>
  );
}

export default withNavigation(NewTweet);
