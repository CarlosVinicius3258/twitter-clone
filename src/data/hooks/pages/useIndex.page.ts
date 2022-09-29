import TweetModel from '../../../model/Tweet';
const useIndex = () => {
  const user: TweetModel = {
    date: new Date(),
    text: 'Some Text',
    user: {
      name: 'John',
      picture: 'https://github.com/carlosvinicius3258.png',
      username: '@janedoe',
    },
  };

  return { user };
};

export default useIndex;
