import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { AppBar } from '@material-ui/core';

const comments = [{ user: "Daniel", message: "Always change the master branch." },
{ user: "Rene", message: "It is ok." },
{ user: "Nicolas", message: "I wil get another branch from SSP-109" },
{ user: "Daniel", message: "Please do not upload anything to SSP-52" }]

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.setState({ comments });
    }

    render() {
        return (
            <div>
                <h4>Comments</h4>
                <AppBar position="relative" color="default" style={{width: "150 px"}}>
                    <Tabs
                        value={0}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Comments" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Comments;