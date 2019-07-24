import React, { Component } from 'react';
import Comments from '../../../common/Comments/Comments';
import InfoHeaderService from '../../../common/InfoHeaderService/InfoHeaderService';
import { Container, FormControl, Select, MenuItem, Box, Input, Button, Paper, Table, TableHead, TableBody ,TableRow, TableCell }
 from '@material-ui/core';
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
            selectIsOpen: false,
            teams: ["JARVIS", "Platform"],
            currentlyTeam: "JARVIS",
            open: false,
            project: "",
            pipeline: ""
        }
    }

    componentDidMount() {
    }

    handleClose() {
        this.setState({ selectIsOpen: false });
    }

    handleOpen() {
        this.setState({ selectIsOpen: true });
    }

    handleInputChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        const title = "New Repository";
        const instructions = [{ key: 1, text: " Create a new Githun Repository" },
        {
            key: 2, text: ` Team and project are required. Pipeline is optional. All blank and special characters 
        will be removed, except '-'. If you type words in camel or pascal case, all uppercase 
        characters will be split using a '-'. i.e. myproject -> myproject, myProject -> my-project, 
        myProJect -> my-pro-ject. The name will be converted to lower case. You can preview the 
        repository name before proceed.` }];
        const { teams, currentlyTeam, selectIsOpen, project, pipeline } = this.state;
        const repoName = pipeline === "" ? project : `${project}-${pipeline}`;

        const StyledTableCell = withStyles(theme => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);

        return (
            <Container>
                <Box mb={4}>
                    <InfoHeaderService title={title} instructions={instructions} m="100rem" />
                </Box>
                <div>
                    <form autoComplete="off">
                        <FormControl m="100rem">
                            <Select
                                open={selectIsOpen}
                                onClose={() => this.handleClose}
                                onOpen={() => this.handleOpen}
                                value={currentlyTeam}
                                onChange={this.handleInputChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'demo-controlled-open-select',
                                }}>

                                {teams.map(team => (
                                    <MenuItem key={Math.random() * (10 - 1) + 1} value={team}>{team}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Input
                            value={project}
                            name="project"
                            onChange={this.handleInputChange}
                            placeholder="Project"
                        />
                        <Input
                            value={pipeline}
                            name="pipeline"
                            onChange={this.handleInputChange}
                            placeholder="PipeLine (optional)"
                        />
                        <Button variant="contained" style={{ backgroundColor: "rgb(0,123,255)", color: "white" }}>
                            CreateRepository
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: "rgb(108,117,110)", color: "white" }}>
                            Clear
                        </Button>
                    </form>
                    <div>
                        <h4>Description</h4>
                        <textarea placeholder="What is the purpose of this repository" style={{ height: "6rem", width: "100%" }}></textarea>
                    </div>
                    <h4>New Repository name:</h4>
                    <Input
                        value={repoName}
                        disabled
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        style={{ background: "rgb(233, 236, 239)", width: "100%" }}
                    />
                    <h4>Team repositories:</h4>
                    <Paper>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Description</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <Comments />
            </Container>
        );
    }
}
export default withStyles(styles)(CreateRepo);