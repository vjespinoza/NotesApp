import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ViewListIcon from "@material-ui/icons/ViewList";
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
        <AppBar position="fixed" color="primary">
            <Container className={classes.navBar}>
                <Grid className={classes.navBarLeft}>
                    <MenuIcon className={classes.icon}></MenuIcon>
                    <Typography className={classes.logo} variant="h4">
                        NotesApp
                    </Typography>
                </Grid>
                <Grid className={classes.navBarCenter}>
                    <TextField
                        fullWidth
                        color="primary"
                        size="small"
                        label="Search notes, reminders or tags..."
                        id="outlined-basic"
                        variant="filled"
                        className={classes.searchBar}
                    ></TextField>
                </Grid>
                <Grid className={classes.navBarRight}>
                    <ViewListIcon className={classes.icon}></ViewListIcon>
                    <Avatar
                        className={classes.avatar}
                        alt="Victor Espinoza"
                        src={profilePic}
                    ></Avatar>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default NavBar;
