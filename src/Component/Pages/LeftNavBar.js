import React, {useState} from 'react'
import { makeStyles, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, RootRef, } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

    root:{
        width: '16vw',
        height: '100vh',
        backgroundColor: '#1F1F33', 

        '@media (max-width: 600px)':{
            width:'100vw',
            height:'auto',
        },
    },
    wrapper:{

    },
    tabsDiv:{
        border:'1px white solid',
    },
    tabListItem:{
        fontFamily: 'Lexend',
        color: '#f0f0f6',
        padding: '1em 0 1em 2em',
        '&:hover':{
            backgroundColor: '#D2D2E5',
            color: '#1F1F33',
        },
        '@media (max-width: 600px)':{
            padding: '1em',
        },
    },
    tabListIcon:{
        margin:'0',
    },
    divider:{
        backgroundColor:'#1F1F33',
    },

}));


export default function LeftNavBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <div className={classes.tabsDiv}>
                
                    <List component='nav' className={classes.tabList}>

                        <ListItem button component='a' href='#' className={classes.tabListItem}>
                            Home
                        </ListItem>

                        <Divider />

                        <ListItem button component='a' href='#' className={classes.tabListItem}>
                            Sales
                        </ListItem>

                        <Divider />

                        <ListItem button component='a' href='#' className={classes.tabListItem}>
                            Orders
                        </ListItem>

                        <Divider />

                        <ListItem button component='a' href='#' className={classes.tabListItem}>
                            Report
                        </ListItem>

                    </List>

                </div>

            </div>
            
        </div>
    )
}
