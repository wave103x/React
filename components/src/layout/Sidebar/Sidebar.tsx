import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
