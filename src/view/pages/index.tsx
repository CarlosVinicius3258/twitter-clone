import React from 'react';
/* Pages */

/*Components*/
import TextInput from '../components/inputs/TextInput/textInput';

import useIndex from '../../data/hooks/pages/useIndex.page';

import styles from '../styles/pages/index.module.css';
import Tweet from '../components/data-display/Tweet/tweet';
// import { Container } from './styles';

const Index: React.FC = () => {
  let { indexGetController, indexHandleController } = useIndex();
  let { maxTextLength, sortedTweetList, text, user } = indexGetController;
  let { onTextChange, sendTweet } = indexHandleController;
  return (
    <div>
      <h1 className={styles['page-title']}>BooTweet</h1>
      <div className={styles['tweet-container']}>
        <img src={user.user.picture} alt='' className={styles['avatar']} />
        <TextInput
          rows={6}
          value={text}
          maxLength={maxTextLength}
          onChange={onTextChange}
          placeholder={'O que está acontencendo?'}
        />
      </div>
      <div className={styles['button-container']}>
        <div>{text.length} / 150</div>
        <button disabled={text.length === 0} onClick={sendTweet} className={styles['post-button']}>
          Tweetar
        </button>
      </div>

      <ul className={styles['tweet-list']}>
        {sortedTweetList?.map((tweet: any, id: any) => (
          <li key={tweet.id} className={styles['tweet-list-item']}>
            <Tweet tweet={tweet.data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
