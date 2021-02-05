import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container } from "@material-ui/core";

const Note = (props) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.note}>
            <Container>
                <Typography
                    className={classes.noteTitle}
                    align="left"
                    variant="h6"
                >
                    Title
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.noteContent} align="left">
                    {props.randomTextGenerator()}
                </Typography>
            </Container>
        </Card>
    );
};

export default Note;
