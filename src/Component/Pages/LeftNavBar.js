import React, {useState} from 'react'
import { makeStyles, Button, List, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery, SwipeableDrawer , Drawer} from '@material-ui/core';

import Logo from '../Asset/Image/endless-knot.png';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

    root:{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1F1F33', 

        '@media (max-width: 600px)':{
            width:'100vw',
            height:'auto',
            position: 'relative'
        },
    },
    wrapper:{
        paddingTop: '1em',

    },
    logoDiv:{
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    logoImage:{
        width: '8em',

        '@media(max-width: 600px)':{
            width: '4em'
        },

        '@media(min-width: 650px) and (max-width: 800px)':{
            width: '4em'
        },
    },
    tabsDiv:{
        paddingTop: '1em',

        '@media(max-width: 600px)':{
            paddingTop: '0',
        },
    },
    tabListItem:{
        fontFamily: 'Mont-SemiBold',
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
    mobileNavDiv:{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 1em',
    }
}));


export default function LeftNavBar() {

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)
    console.log('Mobile viewpoint:', matches);




    const mobileNavBar= () => {

        const handleDrawerOpen = () => {
            setOpenDrawer(true);
          };
        
          const handleDrawerClose = () => {
            setOpenDrawer(false);
          };        

        return(
            <div className={classes.mobileNavDiv}>
                <Button onClick={handleDrawerOpen}>
                    <MenuIcon style={{color: '#ffffff', fontSize: '2.5em', }} />                    
                </Button>

                
                <SwipeableDrawer
                        anchor='right'
                        open= {openDrawer}
                        onClose={handleDrawerClose}
                        onOpen={handleDrawerOpen}
                    >
                        <List>
                            <ListItem>
                                Hello
                            </ListItem>
                        </List>
                </SwipeableDrawer>
                
            </div>
        )
    };

    const desktopNavBar = () => {
        return(
            <div>
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
        )
    };

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <div className={classes.logoDiv}>
                    <img src={Logo} className={classes.logoImage} alt='Company Logo' />
                </div>

                <div className={classes.tabsDiv}>
                    {matches ?  mobileNavBar() : desktopNavBar()}
                </div>

            </div>
            
        </div>
    )
}
