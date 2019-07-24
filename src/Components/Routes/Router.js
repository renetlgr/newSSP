import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateRepo from '../Forms/Github/CreateRepo/client';
import Breadcumbs from '../common/Breadcrumbs/breadcrumbs';
import Header from '../common/Header/header';

const Router = () => (
    <div>
        <Switch>
            <Route path="/" component={Header} />
            <Route exact path="/services/SourceControl/Github/NewRepo" component={CreateRepo}/>
            <Route path="/bread" component={Breadcumbs} />
        </Switch>
    </div>
)

export default Router;