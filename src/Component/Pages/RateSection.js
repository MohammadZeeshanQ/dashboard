import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root:{

    },

}));

export default function RateSection() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <Grid 
                    container
                    className={classes.gridContainer}
                    spacing={2}
                    xs={12} sm={12} md={12}
                >

                    {/* Data coloumn 1 **/}
                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12} sm={3} md={3}
                    >
                        <div className={classes.dataContainer}>

                            <div className={classes.dataType}>
                                <Typography variant='h5' className={classes.dataTypeText}>
                                    Recovered
                                </Typography>
                            </div>

                            <div className={classes.dataNumber}>
                                <Typography variant='h6' className={classes.dataNumberTextHeader}>
                                    Current Rate
                                </Typography>
                                <Typography variant='h5' className={classes.dataNumberText}>
                                    87%
                                </Typography>
                            </div>

                        </div>
                        
                    </Grid>


                    {/* Data coloumn 2 **/}
                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12} sm={3} md={3}
                    >
                        <div className={classes.dataContainer}>

                            <div className={classes.dataType}>
                                <Typography variant='h5' className={classes.dataTypeText}>
                                    Survival
                                </Typography>
                            </div>

                            <div className={classes.dataNumber}>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='h6'>
                                        Positive
                                    </Typography>
                                    <Typography className={classes.subDivText} variant='h5'>
                                        87k
                                    </Typography>
                                </div>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='h6'>
                                        Recovered
                                    </Typography>
                                    <Typography className={classes.subDivText} variant='h5'>
                                        93k
                                    </Typography>
                                </div>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='h6'>
                                        Total
                                    </Typography>
                                    <Typography className={classes.subDivText} variant='h5'>
                                        187k
                                    </Typography>
                                </div>

                            </div>

                        </div>
                        
                    </Grid>


                    {/* Data coloumn 3 **/}
                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12} sm={3} md={3}
                    >
                        <div className={classes.dataContainer}>

                            <div className={classes.dataType}>
                                <Typography variant='h5' className={classes.dataTypeText}>
                                    Recovered
                                </Typography>
                            </div>

                            <div className={classes.dataNumber}>
                                <Typography variant='h6' className={classes.dataNumberTextHeader}>
                                    Positive 
                                </Typography>
                                <Typography variant='h5' className={classes.dataNumberText}>
                                    145k
                                </Typography>
                            </div>

                        </div>
                        
                    </Grid>

                </Grid>

            </div>
            
        </div>
    )
}
