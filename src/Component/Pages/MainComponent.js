import React from 'react'
import { makeStyles } from '@material-ui/core';

import LeftNavBar from './LeftNavBar.js';

const useStyles = makeStyles({

}); 

export default function MainComponent() { 

    const classes = useStyles();

    return (
        <div>
            <LeftNavBar/>
        </div>
    )
}
