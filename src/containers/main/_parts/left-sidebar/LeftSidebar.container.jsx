import React from 'react';
import cssModules from 'react-css-modules';

import styles from './LeftSidebar.container.scss';

const LeftSidebar = () => (
    <div>
        Left Sidebar
    </div>
);

export default cssModules(LeftSidebar, styles, { allowMultiple: true });
