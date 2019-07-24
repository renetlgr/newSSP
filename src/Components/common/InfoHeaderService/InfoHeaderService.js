import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import Info from '@material-ui/icons/Info';

const InfoHeaderService = ({ title, instructions }) => {
    const width = "100%";
    return (
            <div className={width}>
                <ExpansionPanel style={{ backgroundColor: "rgb(23,162,184)", color: "white" }}>
                    <ExpansionPanelSummary
                        expandIcon={<Info style={{ backgroundColor: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{title}</Typography>
                    </ExpansionPanelSummary>
                    
                    {instructions.map( ({key, text}) => (
                        <ExpansionPanelDetails key={key} style={{ backgroundColor: "white", color: "black" }}>
                        <Typography>
                            {text}
                        </Typography>
                        </ExpansionPanelDetails>   
                    ))}
                </ExpansionPanel>
            </div>
    );
}
export default InfoHeaderService;