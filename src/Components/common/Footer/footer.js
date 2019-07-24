import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "center",
    bottom: 0,
    backgroundColor: "#f5f5f5",
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
            © NICE inContact 2019
        </Typography>
      </Paper>
    </div>
  );
}