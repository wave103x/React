import styles from './Paragraph.module.scss';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

export const Paragraph = ({ size = 'main', children, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.main]: size == 'main',
        [styles.small]: size == 'small',
        [styles.big]: size == 'big',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
