import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import { ReactComponent as ArrowIcon } from './arrow_forward.svg';

export const Button = ({
  appearance = 'primary',
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.arrow_down]: arrow == 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
