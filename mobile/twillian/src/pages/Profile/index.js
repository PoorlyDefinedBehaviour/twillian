import React, { useState } from 'react';

import {
  Container,
  Card,
  CardHeader,
  Name,
  InfoContainer,
  Info,
  InfoHeader,
  InfoValue,
  Tweets,
} from './styles';
import Avatar from '~/components/Avatar';
import Tweet from '~/components/Tweet';

function Profile({ navigation }) {
  const user = navigation.getParam('user');
  const [tweets, setTweets] = useState([
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
    {
      id: Math.random(),
      author: {
        name: 'Willian Ferreira',
        username: '@willianferreira',
        avatar: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 5,
      retweets: 12,
      comments: 3,
    },
  ]);

  function renderTweet({ item }) {
    return (
      <Tweet
        author={item.author}
        content={item.content}
        likes={item.likes}
        retweets={item.retweets}
        comments={item.comments}
        navigation={navigation}
      />
    );
  }

  return (
    <Container>
      <Card>
        <CardHeader>
          <Avatar source={user.avatar} large />
        </CardHeader>
        <Name>{user.name}</Name>
        <InfoContainer>
          <Info>
            <InfoHeader>Seguidores</InfoHeader>
            <InfoValue>{user.followers}</InfoValue>
          </Info>
          <Info>
            <InfoHeader>Seguindo</InfoHeader>
            <InfoValue>{user.following}</InfoValue>
          </Info>
          <Info>
            <InfoHeader>Tweets</InfoHeader>
            <InfoValue>{user.tweets.length}</InfoValue>
          </Info>
        </InfoContainer>
      </Card>
      <Tweets data={tweets} keyExtractor={item => `tweet-${item.id}`} renderItem={renderTweet} />
    </Container>
  );
}

export default {
  screen: Profile,
  navigationOptions: {
    title: 'Perfil',
  },
};
