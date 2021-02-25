import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Note = ({ notes, setNotes, title, content, active, date, time, id }) => {
    const classes = useStyles();

    console.log(notes);
    //Delete chip element
    const handleDelete = (e) => {
        const closeIconID = parseInt(e.currentTarget.id.slice(10));
        console.log(closeIconID);
        console.log(id);

        const notesCopy = [...notes];
        // console.log(notesCopy);

        const noteCopy = { ...notes[closeIconID] };
        console.log(noteCopy);

        noteCopy.reminder.active = false;
        noteCopy.reminder.date = "";
        noteCopy.reminder.time = "";
        // console.log(notesCopy);
        // console.log(noteCopy);

        console.log(notes);
        notes[closeIconID] = noteCopy;
        console.log(notes);

        if (closeIconID === id) {
            setNotes([...notes]);
            console.log(notes);
        }
    };

    //Format date
    const d = new Date(date);
    const month = d.toLocaleString("en", { month: "short" });
    const day = date.slice(8);
    const reminderDate = month + " " + day;

    //Coditional display of Chip element
    let activeAlert = {};

    if (active === true) {
        activeAlert = {
            date: reminderDate,
            time: time,
        };
    }

    const alertBadge = (
        <Chip
            id={`badge${id}`}
            className={classes.alertBadge}
            icon={<NotificationsActiveOutlinedIcon />}
            size="small"
            onDelete={handleDelete}
            label={`${activeAlert.date}, ${activeAlert.time}`}
            deleteIcon={<HighlightOffIcon id={`badgeClose${id}`} />}
        ></Chip>
    );

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
            <Container>{active === true ? alertBadge : ""}</Container>
        </Card>
    );
};

export default Note;
