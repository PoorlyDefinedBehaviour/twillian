import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import { withNavigation } from 'react-navigation';

import {
  Container, Header, Message, Footer, Characters, Send, SendText,
} from './styles';
import Avatar from '~/components/Avatar';

function NewTweet({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [content, setContent] = useState('');
  const maxCharacters = 128;

  async function sendTweet() {
    try {
      const response = await api.post('tweet', { content });

      setContent('');

      Keyboard.dismiss();

      dispatch({ type: 'NEW_TWEET', tweet: response.data });
    } catch (ex) {
      console.log(ex);
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
