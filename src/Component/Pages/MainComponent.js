import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';

import LeftNavBar from './LeftNavBar.js';
import DailySection from './DailySection.js';
import OverallSection from './OverallSection.js';
import RateSection from './RateSection.js';

const useStyles = makeStyles({
    root:{
        position: 'relative',
        backgroundColor: "#efefff",
        width: '100vw',
        //height: '100vh',
        display: 'flex',
    },  
    gridItemComponent:{
        paddingTop: '1em',

        '@media(max-width: 800px)':{
            paddingTop: '0', 
        }
    },
}); 

export default function MainComponent() { 

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container
                xs={12} sm={12} md={12} 
            >

                <Grid
                    item xs={12} sm={2} md={2} 
                >
                    <LeftNavBar/>
                </Grid>

                <Grid 
                    item xs={12} sm={10} md={10}
                    
                >
                    <div className={classes.gridItemComponent} >
                        <DailySection/>
                        <RateSection/>
                        <OverallSection/>
                    </div>
 
                </Grid>
                
            </Grid>
        </div>
    )
}
