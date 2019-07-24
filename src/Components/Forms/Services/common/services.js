import React from 'react';
import SimpleBar from "../../../common/SimpleBar/simpleBar";
import ServiceCard from "./serviceCard";
import { Grid } from '@material-ui/core';
import AddServiceCard from './addServiceCard';

function Services(props) {
    return (
        <>
        <SimpleBar title='Services'/>
            <Grid container spacing={3}>
                {props.isAdmin &&
                    <Grid item xs={12} md={4}>
                        <AddServiceCard/>
                    </Grid>
                }
                {props.servicesList.map(service =>
                    <Grid item xs={12} md={4}>
                        <ServiceCard service={service}/>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Services;
