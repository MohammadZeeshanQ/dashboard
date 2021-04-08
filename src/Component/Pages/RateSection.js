import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

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
        padding: '2em 0',
        textAlign: 'center',
    },
    dataDailyNumber:{
        display: 'flex',
        justifyContent: 'space-around',
    },
    dataNumberSubDiv:{
        padding: '0 1em'
    },
    dataType:{
        paddingBottom: '1em'
    }, 
    dataTypeMainText:{
        color: '#a9acb1',
        fontFamily: 'Lexend',
    },
    dataNumberTextHeader:{
        color: '#a9acb1',
        fontFamily: 'Lexend',
    },
    dataTypeText:{
        color: '#2a313d',
        fontFamily: 'Mont-SemiBold',
    },
    subDivTextHeader:{
        color: '#a9acb1',
        fontFamily: 'Lexend',
    },
    dataNumberText:{
        color: '#2a313d',
        fontFamily: 'Mont-SemiBold',
    },
    subDivText:{
        color: '#2a313d',
        fontFamily: 'Mont-SemiBold',
    }


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
                                <Typography variant='h5' className={classes.dataTypeMainText}>
                                    Recent
                                </Typography>
                            </div>

                            <div className={classes.dataNumber}>
                                <Typography variant='h6' gutterBottom className={classes.dataNumberTextHeader}>
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
                        xs={12} sm={5} md={5}
                    >
                        <div className={classes.dataContainer}>

                            <div className={classes.dataType}>
                                <Typography variant='h5' className={classes.dataTypeMainText}>
                                    Survival
                                </Typography>
                            </div>

                            <div className={classes.dataDailyNumber}>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='body1' gutterBottom>
                                        Current Rate
                                    </Typography>
                                    <Typography className={classes.subDivText} variant='h5'>
                                        87k
                                    </Typography>
                                </div>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='body1' gutterBottom>
                                        Recovered
                                    </Typography>
                                    <Typography className={classes.subDivText} variant='h5'>
                                        93k
                                    </Typography>
                                </div>

                                <div className={classes.dataNumberSubDiv}>
                                    <Typography className={classes.subDivTextHeader} variant='body1' gutterBottom>
                                        Today Total 
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
                                <Typography variant='h5' className={classes.dataTypeMainText}>
                                    Recovered
                                </Typography>
                            </div>

                            <div className={classes.dataNumber}>
                                <Typography variant='h6' gutterBottom className={classes.dataNumberTextHeader} >
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
