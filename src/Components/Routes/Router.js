import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateRepo from '../Forms/Github/CreateRepo/client';

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/services/SourceControl/Github/NewRepo" component={CreateRepo}/>
        </Switch>
    </div>
)

export default Router;