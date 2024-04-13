import { type JSX } from 'react';

import { Outlet } from 'react-router-dom';

import styles from './general-layout.module.scss';

export const GeneralLayout = (): JSX.Element => (
  <div className={styles.pageLayout}>
    <Outlet />
  </div>
);
