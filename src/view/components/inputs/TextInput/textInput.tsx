import React from 'react';

/*Style*/
import styles from './textInput.module.css';

const TextInput: React.FC = (props) => {
  return (
    <div>
      <textarea className={styles['input']} {...props} />
    </div>
  );
};

export default TextInput;
