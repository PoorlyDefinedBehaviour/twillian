import React, { useState } from 'react';

import { Container, Tweets } from './styles';
import Tweetar from '~/components/Tweetar';
import Tweet from '~/components/Tweet';

export function navigationOptions({}) {
  return {
    title: 'Últimos Tweets',
  };
}

export default function Main({}) {
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
      />
    );
  }

  return (
    <Container>
      <Tweetar />
      <Tweets data={tweets} keyExtractor={item => `tweet-${item.id}`} renderItem={renderTweet} />
    </Container>
  );
}
