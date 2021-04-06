import React from 'react'
import { makeStyles } from '@material-ui/core';

import LeftNavBar from './LeftNavBar.js';
import DailySection from './DailySection.js';
import OverallSection from './OverallSection.js';

const useStyles = makeStyles({
    root:{
        position: 'relative',
        backgroundColor: "#efefff",
    },  
}); 

export default function MainComponent() { 

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <DailySection/>
            <OverallSection/>
        </div>
    )
}
