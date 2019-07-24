import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Add from '@material-ui/icons/Add';
import { Grid, Box } from '@material-ui/core';
import './card.css';


function AddServiceCard(props) {
  return (
    <Card className="card">
      <CardActionArea>
        <Grid container direction="row" justify="center" >
            <Box py={19}>
                <Add fontSize='large'></Add>
            </Box> 
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default AddServiceCard;