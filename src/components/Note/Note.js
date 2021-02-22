import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container } from "@material-ui/core";

const Note = ({ title, content }) => {
    const classes = useStyles();

    console.log(title);

    return (
        // <div></div>
        <Card variant="outlined" className={classes.note}>
            <Container>
                <Typography
                    className={classes.noteTitle}
                    align="left"
                    variant="h6"
                >
                    {title}
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.noteContent} align="left">
                    {content}
                </Typography>
            </Container>
        </Card>
    );
};

export default Note;
