import { type JSX } from 'react';

import styles from './not-found-page.module.css';

export const NotFoundPage = (): JSX.Element => (
  <div className={styles.notFound}>
    <h3>404 - Not Found</h3>
  </div>
);
