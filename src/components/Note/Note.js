import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";

const Note = ({ title, content }) => {
    const classes = useStyles();

    return (
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

            {/* <Container>
                <Chip
                    className={classes.alertBadge}
                    style={displayChip}
                    icon={<NotificationsActiveOutlinedIcon />}
                    size="small"
                    onDelete={handleDelete}
                    label={`${date}, ${reminderTime}`}
                ></Chip>
            </Container> */}
        </Card>
    );
};

export default Note;
