import React from 'react';
import styles from './tweet.module.css';
import moment from 'moment';
import { DateService } from '../../../../data/service/DateService';
// import { Container } from './styles';
import tweetModel from '../../../../model/Tweet';

moment.locale('pt-br');
const Tweet = (props: { tweet: tweetModel }) => {
  const tweet = props.tweet;
  return (
    <div className={styles['tweet-container']}>
      <img className={styles['avatar']} src={tweet.user?.picture} alt='' />
      <div className={styles['user']}>
        <span className={styles['user-name']}>{`${tweet.user?.name} `}</span>
        <span className={styles['user-username']}> {`${tweet.user?.username} `}</span>
        <span className={styles['date']}>{`${DateService().relativeTime(tweet.date)}`}</span>
      </div>
      <div className={styles['tweet-text']}>{tweet.text}</div>
    </div>
  );
};

export default Tweet;
