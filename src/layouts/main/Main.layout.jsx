import React from 'react';
import cssModules from 'react-css-modules';

import styles from './Main.layout.scss';

const MainLayout = props => (
    <div styleName="main-layout">
        <div styleName="left">
            {props.leftSidebar}
        </div>
        <div styleName="content">
            {props.main}
        </div>
    </div>
);

MainLayout.propTypes = {
    main: React.PropTypes.node.isRequired,
    leftSidebar: React.PropTypes.node,
};

export default cssModules(MainLayout, styles, { allowMultiple: true });
