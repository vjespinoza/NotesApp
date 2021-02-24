import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";

const Note = ({ title, content, notes }) => {
    const classes = useStyles();

    const handleDelete = () => {
        console.log("delete");
    };

    console.log(notes);

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
            <Container>
                {notes.map((reminder, index) => {
                    console.log(reminder.reminder.active);
                    if (reminder.reminder.active) {
                        return (
                            <Chip
                                key={index}
                                icon={<NotificationsActiveOutlinedIcon />}
                                size="small"
                                onDelete={handleDelete}
                                label={`${reminder.reminder.date}, ${reminder.reminder.time}`}
                            ></Chip>
                        );
                    }
                })}
            </Container>
        </Card>
    );
};

export default Note;
