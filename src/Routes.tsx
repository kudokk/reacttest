import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Pager from './views/Pager';
import ShopResult from './views/ShopResult';

const component: React.SFC = () => {
    return (
        <div>
            <ShopResult />
            <Pager />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/aboutus'} component={AboutUs} />
            </Switch>
        </div>
    );
};

export default component;
