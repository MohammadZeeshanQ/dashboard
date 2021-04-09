import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

// Icon Import
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TimelineIcon from '@material-ui/icons/Timeline';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';


const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        paddingTop: '2em',

        '@media (max-width: 600px)':{
            paddingTop: '0',
        },
    },
    dataContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius: '1em',
        display:'flex',
        alignItems: 'center', 
        padding: '1em .6em',
    },
    dataLongContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius: '1em',
        display:'flex',
        alignItems: 'center', 
        padding: '1em .6em',
        
        '@media(max-width: 800px)':{
            display: 'block',
        },
    },
    dataDiv:{
        flexGrow: 1,
    },
    dataTotalDiv:{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    iconDivPrimary:{
        display: 'flex',
        alignItems: 'center',
        padding: '.5em',
        backgroundColor: '#8c19a4',
        borderRadius: '50%',
        marginRight: '1em',
    },
    iconDiv:{
        display: 'flex',
        alignItems: 'center',
        padding: '.5em',
        backgroundColor: '#8c19a4',
        borderRadius: '50%',
    },
    dataHeading:{
        color: '#a9acb1',
        fontFamily: 'Lexend',

        '@media(max-width: 800px)':{
            fontSize: '1em',
        },
    },
    dataValue:{
        color: '#2a313d',
        fontFamily: 'Mont-SemiBold',

        '@media(max-width: 800px)':{
            fontSize: '1.1em',
        },
    },

}));

export default function DailySection() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid container className={classes.gridContainer}
                    xs={12} sm={12} md={12} spacing={2}
                    justify='space-evenly'
                >

                    <Grid item 
                        xs={12} sm={6} md={5}
                        className={classes.gridItem}>

                        <div className={classes.dataContainer}>

                            <div className={classes.dataTotalDiv}>
                                
                                <div className={classes.iconDivPrimary}>
                                    <TimelineIcon style={{fontSize:'2em', color: '#FFFFFF',}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Total
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        91k
                                    </Typography>
                                </div>
                                                          
                            </div>


                            <div className={classes.dataTotalDiv}>
                                <div className={classes.iconDivPrimary}>
                                    <DonutLargeIcon style={{fontSize:'2em', color: '#FFFFFF',}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Total
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        91k
                                    </Typography>
                                </div>
                            </div>

                            <div className={classes.dataTotalDiv}>
                                <div className={classes.iconDivPrimary}>
                                    <BubbleChartIcon style={{fontSize:'2em', color: '#FFFFFF',}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Total
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        91k
                                    </Typography>
                                </div>
                            </div>

                        </div>

                    </Grid>



                    <Grid item 
                        xs={6} sm={3} md={3}
                        className={classes.gridItem}>

                        <div className={classes.dataContainer}>

                            <div className={classes.dataDiv}>

                                <Typography variant='h6' className={classes.dataHeading}>
                                    Cases
                                </Typography>
                                <Typography variant='h5' className={classes.dataValue}>
                                    124k
                                </Typography>

                            </div>

                            <div className={classes.iconDiv}>
                                <LocalHotelIcon style={{fontSize: '2em', color: '#FFFFFF' }} />
                            </div>

                        </div>

                    </Grid>



                     <Grid item 
                        xs={6} sm={3} md={3}
                        className={classes.gridItem}>

                        <div className={classes.dataContainer}>

                            <div className={classes.dataDiv}>

                                <Typography variant='h6' className={classes.dataHeading}>
                                    Recovered
                                </Typography>
                                <Typography variant='h5' className={classes.dataValue}>
                                    91k
                                </Typography>

                            </div>

                            <div className={classes.iconDiv} >
                                <FavoriteBorderIcon style={{fontSize: '2em', color: '#FFFFFF', }} />
                            </div>

                        </div>

                    </Grid>


                </Grid>
            </div>
        </div>
    )
}
