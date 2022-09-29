import React from 'react';
/* Pages */

/*Components*/
import TextInput from '../components/inputs/TextInput/textInput';

import useIndex from '../../data/hooks/pages/useIndex.page';

import styles from '../styles/pages/index.module.css';
import Tweet from '../components/data-display/Tweet/tweet';
// import { Container } from './styles';

const tweet = {
  date: new Date(),
  text: 'Meu primeiro Tweet',
  user: {
    name: 'Jane Doe',
    username: '@janedoe',
    picture: 'https://github.com/carlosvinicius3258.png',
  },
};
const Index: React.FC = () => {
  let { user } = useIndex();
  return (
    <div>
      <h1 className={styles['page-title']}>BootTweet</h1>
      <div className={styles['tweet-container']}>
        <img src={user.user.picture} alt='' className={styles['avatar']} />
        <TextInput />
      </div>
      <div className={styles['button-container']}>
        <div>0 / 150</div>
        <button className={styles['post-button']}>Tweetar</button>
      </div>

      <ul className={styles['tweet-list']}>
        <li className={styles['tweet-list-item']}>
          <Tweet tweet={tweet} />
        </li>
        <li className={styles['tweet-list-item']}>
          <Tweet tweet={tweet} />
        </li>
        <li className={styles['tweet-list-item']}>
          <Tweet tweet={tweet} />
        </li>
      </ul>
    </div>
  );
};

export default Index;
