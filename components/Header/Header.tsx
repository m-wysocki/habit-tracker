import React from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
  content: string;
}

const Header = ({ content }: IHeaderProps) => {
  return <div className={styles.header}>{content}</div>;
};

export default Header;
