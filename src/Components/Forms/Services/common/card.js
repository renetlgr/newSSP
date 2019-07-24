import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css';


function PersonalizedCard() {
  return (
    <Card className="card">
      <CardActionArea>
        <Grid container direction="row" justify="center" >
            <img src="https://png.icons8.com/ios-filled/github/000000/100" alt="Icon"/>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Github
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            GitHub  It offers all of the distributed version control and source code management (SCM) functionality of Git as well as 
            adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, 
            task management, and wikis for every project.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PersonalizedCard;