import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateRepo from '../Forms/Github/CreateRepo/client';
import Container from '@material-ui/core/Container';

const Router = () => (
    <div>
        <Switch>
            <Container fixed>
                <Route exact path="/services/SourceControl/Github/NewRepo" component={CreateRepo}/>
            </Container>
        </Switch>
    </div>
)

export default Router;