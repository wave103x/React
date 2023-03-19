import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';
import { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className={cn(styles.footer, styles.footerMargin)} >
        <p className={styles.copyright}>@{format(new Date(), 'yyyy')}</p>
      </footer>
    );
  }
}
