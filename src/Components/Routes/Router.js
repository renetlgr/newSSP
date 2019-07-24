import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateRepo from '../Forms/Github/CreateRepo/client';
import ServicesAdmin from '../Forms/Services/admin';
import ServicesClient from '../Forms/Services/client';

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/services/SourceControl/Github/NewRepo" component={CreateRepo}/>
            <Route exact path="/services/client" component={ServicesClient}/>
            <Route exact path="/admin" component={ServicesAdmin}/>
        </Switch>
    </div>
)

export default Router;