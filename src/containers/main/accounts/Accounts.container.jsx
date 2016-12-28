import React from 'react';
import cssModules from 'react-css-modules';

import styles from './Accounts.container.scss';

const AccountsPage = () => (
    <div>
        Accounts Page
    </div>
);

export default cssModules(AccountsPage, styles, { allowMultiple: true });
