import React from 'react';

import styles from './Placeholder.module.scss';

import { ReactComponent as RefreshIcon } from './refresh.svg';

export const Placeholder = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.iconWrapper}>
        <RefreshIcon width={100} height={100} className={styles.icon} />
      </div>
    </div>
  );
};
