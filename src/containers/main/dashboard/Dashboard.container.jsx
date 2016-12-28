import React from 'react';
import cssModules from 'react-css-modules';

import styles from './Dashboard.container.scss';

const Dashboard = () => (
    <div>
        Dashboard
    </div>
);

export default cssModules(Dashboard, styles, { allowMultiple: true });
