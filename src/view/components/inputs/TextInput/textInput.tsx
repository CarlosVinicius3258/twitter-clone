import React from 'react';

/*Style*/
import styles from './textInput.module.css';

const TextInput = (props: { rows: number; placeholder: string; maxLength: number; onChange: any; value: string }) => {
  return (
    <div>
      <textarea className={styles['input']} {...props} />
    </div>
  );
};

export default TextInput;
