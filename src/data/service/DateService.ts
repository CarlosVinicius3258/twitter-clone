const relativeFormater = new Intl.RelativeTimeFormat('pt', {
  style: 'long',
  numeric: 'auto',
});

export const DateService = () => {
  const diff = (date: Date) => {
    const now = new Date();
    let type: any = '';
    let difference = (now.getTime() - new Date(date).getTime()) / 1000;
    if (difference === 0) {
      difference = 0;
    } else if (difference < 60) {
      // seconds
      type = 'seconds';
      difference = Math.round(difference);
    } else if (difference < 60 * 60) {
      //minutes
      type = 'minutes';
      difference = Math.round(difference / 60);
    } else if (difference < 60 * 60 * 24) {
      //hours
      type = 'hours';
      difference = Math.round(difference / 60 / 60);
    } else {
      type = 'days';

      difference = Math.round(difference / 60 / 60 / 24);
    }

    return {
      type,
      difference,
    };
  };

  const relativeTime = (date: any) => {
    const { difference, type } = diff(date);
    if (difference === 0) {
      return 'agora';
    }
    return relativeFormater.format(-difference, type);
  };

  return { relativeTime };
};
