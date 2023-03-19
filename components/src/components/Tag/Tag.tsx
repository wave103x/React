import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ size = 'm', color, href, children, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(
        styles.tag,
        {
          [styles.m]: size == 'm',
          [styles.s]: size == 's',
        },
        {
          [styles.ghost]: color == 'ghost',
          [styles.gray]: color == 'gray',
          [styles.red]: color == 'red',
        }
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
