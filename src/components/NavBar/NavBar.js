import React from "react";
import { Menu, ViewAgendaOutlined } from "@material-ui/icons";
import profilePic from "../../assets/profile.jpg";

//Imported styles
import useStyles from "./style";
import {
    AppBar,
    Typography,
    Container,
    Grid,
    InputBase,
    Avatar,
} from "@material-ui/core";

const NavBar = ({ test }) => {
    const classes = useStyles();

    return (
        <AppBar onClick={test} position="fixed" color="primary">
            <Container className={classes.navBar}>
                <Grid className={classes.navBarLeft}>
                    <Menu cursor="pointer" className={classes.icon}></Menu>
                    <Typography className={classes.logo} variant="h4">
                        NotesApp
                    </Typography>
                </Grid>
                <Grid className={classes.navBarCenter}>
                    <InputBase
                        fullWidth
                        color="primary"
                        size="small"
                        placeholder="Search notes, reminders or tags..."
                        id="outlined-basic"
                        variant="filled"
                        className={classes.searchBar}
                    ></InputBase>
                </Grid>
                <Grid className={classes.navBarRight}>
                    <ViewAgendaOutlined
                        cursor="pointer"
                        className={classes.icon}
                    ></ViewAgendaOutlined>
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
