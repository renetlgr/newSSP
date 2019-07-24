import React, { Component } from 'react';
import Comments from '../../../common/Comments/Comments';
import InfoHeaderService from '../../../common/InfoHeaderService/InfoHeaderService';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    expnasion: {
        backgroundColor: "FF5733",
        color: "FF5733"
    }
});

class CreateRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const title = "New Repository";
        const instructions = [{ key: 1, text: " Create a new Githun Repository" },
        { key: 2, text: ` Team and project are required. Pipeline is optional. All blank and special characters 
        will be removed, except '-'. If you type words in camel or pascal case, all uppercase 
        characters will be split using a '-'. i.e. myproject -> myproject, myProject -> my-project, 
        myProJect -> my-pro-ject. The name will be converted to lower case. You can preview the 
        repository name before proceed.` }];
        return (
            <Container>
                <InfoHeaderService title={title} instructions={instructions} />

                <Comments />
            </Container>
        );
    }
}
export default withStyles(styles)(CreateRepo);
// export default CreateRepo;