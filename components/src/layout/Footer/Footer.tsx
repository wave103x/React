import { Component } from 'react';
import { format } from 'date-fns';
import cn from 'classnames';

import styles from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className={cn(styles.footer, styles.footerMargin)}>
        <p className={styles.copyright}>@{format(new Date(), 'yyyy')}</p>
      </footer>
    );
  }
}
