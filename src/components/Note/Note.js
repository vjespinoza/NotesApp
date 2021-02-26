import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Note = ({
    notes,
    setNotes,
    title,
    content,
    active,
    date,
    time,
    id,
    color,
}) => {
    const classes = useStyles();
    //Delete chip element
    const handleBadgeDelete = (e) => {
        const closeIconID = parseInt(e.currentTarget.id.slice(10));

        const notesCopy = [...notes];
        // console.log(notesCopy);

        const noteCopy = { ...notes[closeIconID] };

        noteCopy.reminder.active = false;
        noteCopy.reminder.date = "";
        noteCopy.reminder.time = "";

        notes[closeIconID] = noteCopy;

        if (closeIconID === id) {
            setNotes([...notes]);
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
            onDelete={handleBadgeDelete}
            label={`${activeAlert.date}, ${activeAlert.time}`}
            deleteIcon={<HighlightOffIcon id={`badgeClose${id}`} />}
        ></Chip>
    );

    return (
        <Card
            variant="outlined"
            className={classes.note}
            style={{ backgroundColor: color }}
        >
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
