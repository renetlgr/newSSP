import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SimpleBar from "./simpleBar";
import ImgMediaCard from "./card";
import { Grid } from '@material-ui/core';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className="fullWidthTabs">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Services" />
          <Tab label="Tickets" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
            <SimpleBar/>
            <Grid container spacing={3}>
                <Grid item md={12} md={4}>
                    <ImgMediaCard/>
                </Grid>
                <Grid item md={12} md={4}>
                    <ImgMediaCard/>
                </Grid>
                <Grid item md={12} md={4}>
                    <ImgMediaCard/>
                </Grid>
            </Grid>
        </TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;