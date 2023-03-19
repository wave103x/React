import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'm' | 's';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray';
  href?: string;
}
