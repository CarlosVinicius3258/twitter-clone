import { ApiService } from './../../service/ApiService';
import { useMemo, useState } from 'react';
import TweetModel from '../../../model/Tweet';
import useApi from '../userApi';
import { mutate } from 'swr';
const useIndex = () => {
  const maxTextLength: number = 125;
  const user: TweetModel = {
    id: '02',
    date: new Date(),
    text: 'Some Text',
    user: {
      name: 'John',
      picture: 'https://github.com/carlosvinicius3258.png',
      username: '@janedoe',
    },
  };
  // TODO: corrigir ordenação de tweets por ordem de data de postagem
  const [text, setText] = useState<string>('');

  let tweetList: any = useApi('tweets');
  let sortedTweetList = useMemo(() => {
    return tweetList.data?.sort((a: any, b: any) => (a.data.date - b.data.date ? -1 : 1));
  }, [tweetList]);
  const onTextChange = (e: any) => {
    const text = e.target.value;

    if (text.length <= maxTextLength) {
      setText(text);
    }
  };
  const sendTweet = async () => {
    await ApiService.post('tweets', {
      data: {
        user: user.user,
        text,
        date: new Date().toISOString(),
      },
    });

    setText('');
    mutate('tweets');
  };

  return {
    indexGetController: {
      user,
      text,
      sortedTweetList,
      maxTextLength,
    },
    indexHandleController: {
      sendTweet,
      onTextChange,
    },
  };
};

export default useIndex;
