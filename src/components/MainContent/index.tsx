import React, { Component, ReactNode } from 'react';
import styles from './index.less';
import Header from '@/components/Header';

export interface MainContentProps {
  children: ReactNode;
}

class MainContent extends Component<MainContentProps> {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default MainContent;
