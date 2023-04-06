import React, { useEffect } from 'react';

import styles from './CardModal.module.scss';

export const CardModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.modalBg}>
      CardModal
      <button onClick={onClose}>close</button>
    </div>
  );
};
