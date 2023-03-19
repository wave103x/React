import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './MyButton.module.scss';
import cn from 'classnames';

interface IMyButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
}

export default function MyButton({children, ...props}: IMyButton) {
  return (
    <button {...props} className={cn(styles.button)}>{children}</button>
  )
}
