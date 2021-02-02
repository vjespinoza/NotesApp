import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import profilePic from "../../assets/profile.jpg";

//Imported styles
import useStyles from "./style";
import {
    AppBar,
    Typography,
    Container,
    Grid,
    TextField,
    Avatar,
} from "@material-ui/core";

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar>
            <Container className={classes.navBar}>
                <Grid className={classes.navBarLeft}>
                    <MenuIcon className={classes.iconColor}></MenuIcon>
                    <Typography
                        className={classes.logo}
                        color="primary"
                        variant="h4"
                    >
                        NotesApp
                    </Typography>
                </Grid>
                <Grid className={classes.navBarCenter}>
                    <TextField className={classes.searchBar}></TextField>
                </Grid>
                <Grid className={classes.navBarRight}>
                    <Avatar alt="Victor Espinoza" src={profilePic}></Avatar>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default NavBar;
