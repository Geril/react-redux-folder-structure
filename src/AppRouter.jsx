import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from 'layouts/main/Main.layout';

import Dashboard from 'containers/main/dashboard/Dashboard.container';
import Accounts from 'containers/main/accounts/Accounts.container';

import LeftSidebar from 'containers/main/_parts/left-sidebar/LeftSidebar.container';

import PageNotFound from 'containers/page-not-found/PageNotFound.container';

const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute components={{ leftSidebar: LeftSidebar, main: Dashboard }} />
            <Route path="accounts" components={{ leftSidebar: LeftSidebar, main: Accounts }} />
        </Route>
        <Route path="*" component={PageNotFound} />
    </Router>
);

export default AppRouter;
