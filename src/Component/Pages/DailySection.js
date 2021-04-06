import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

// Icon Import
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const useStyles = makeStyles((theme) => ({
    root:{
        width: '100vw',
        marginLeft:'1em',
        paddingTop: '2em',

        '@media (max-width: 600px)':{
            marginLeft:'0',
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
    dataDiv:{
        flexGrow: 1,
    },
    dataTotalDiv:{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
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
    },
    dataValue:{
        color: '#2a313d',
        fontFamily: 'Mont-SemiBold',
    },

}));

export default function DailySection() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid container className={classes.gridContainer}
                    xs={12} sm={12} md={12} spacing={2}
                >
                    <Grid item 
                        xs={6} sm={3} md={3}
                        className={classes.gridItem}>

                        <div className={classes.dataContainer}>

                            <div className={classes.dataDiv}>

                                <Typography variant='h6' className={classes.dataHeading}>
                                    Cases
                                </Typography>
                                <Typography variant='h5' className={classes.dataValue}>
                                    124K
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
                                    91K
                                </Typography>

                            </div>

                            <div className={classes.iconDiv} >
                                <FavoriteBorderIcon style={{fontSize: '2em', color: '#FFFFFF', }} />
                            </div>

                        </div>

                    </Grid>



                    <Grid item 
                        xs={12} sm={3} md={5}
                        className={classes.gridItem}>

                        <div className={classes.dataContainer}>

                            <div className={classes.dataTotalDiv}>
                                
                                <div>
                                    <FiberManualRecordIcon style={{fontSize:'.8em', color: '#8c19a4', margin: '0 1em '}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Total
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        91K
                                    </Typography>
                                </div>
                                                          
                            </div>


                            <div className={classes.dataTotalDiv}>
                            <   div>
                                    <FiberManualRecordIcon style={{fontSize:'.8em', color: '#88a8c4', margin: '0 1em '}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Avg
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        6.7k
                                    </Typography>
                                </div>
                            </div>

                            <div className={classes.dataTotalDiv}>
                                <div>
                                    <FiberManualRecordIcon style={{fontSize:'.8em', color: '#0071CE', margin: '0 1em '}}/>
                                </div>

                                <div>
                                    <Typography variant='h6' className={classes.dataHeading}>
                                        Target
                                    </Typography>
                                    <Typography variant='h5' className={classes.dataValue}>
                                        91K
                                    </Typography>
                                </div>
                            </div>

                        </div>

                    </Grid>

            

                </Grid>
            </div>


        </div>
    )
}