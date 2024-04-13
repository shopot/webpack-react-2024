import { type JSX } from 'react';

import { t } from 'i18next';

import styles from './home-page.module.scss';

const HomePage = (): JSX.Element => (
  <div>
    <h1>{t('Welcome')}</h1>
    <p className={styles.textCenter}>Start editing to see some magic happen :)</p>
  </div>
);

export default HomePage;
