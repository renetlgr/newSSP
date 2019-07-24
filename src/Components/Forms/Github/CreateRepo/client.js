import React, { Component } from 'react';
import Comments from '../../../common/Comments/Comments';
import Container from '@material-ui/core/Container';

class CreateRepo extends Component {

    render() {
        return (
            <Container fixed>
                <h1>Create Repository in Github</h1>
                <Comments />
            </Container>
        );
    }
}

export default CreateRepo;