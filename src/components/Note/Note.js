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
    tags,
}) => {
    const classes = useStyles();
    //Delete Alert Badge
    const handleBadgeDelete = (e) => {
        const closeIconID = parseInt(e.currentTarget.id.slice(10));

        const noteCopy = { ...notes[closeIconID] };

        noteCopy.reminder.active = false;
        noteCopy.reminder.date = "";
        noteCopy.reminder.time = "";

        notes[closeIconID] = noteCopy;

        if (closeIconID === id) {
            setNotes([...notes]);
        }
    };

    // Delete Tag Badge
    const handleTagDelete = (e) => {
        const noteID = e.currentTarget.closest(`#note${id}`).id.slice(4);
        const tagFilter = e.currentTarget.parentElement.innerText;
        const noteCopy = { ...notes[noteID] };
        const noteTags = noteCopy.tags;
        const newNoteTags = noteTags.filter((tag) => tag !== tagFilter);

        notes[noteID].tags = newNoteTags;

        setNotes([...notes]);
    };

    //Format date
    const d = new Date(date);
    const month = d.toLocaleString("en", { month: "short" });
    const day = date.slice(8);
    const reminderDate = month + " " + day;

    //Coditional display of Alert Badge
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
            id={`note${id}`}
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
            <Container>
                {tags.map((tag, index) => (
                    <Chip
                        id={`tag${index}`}
                        key={index}
                        className={classes.alertBadge}
                        size="small"
                        onDelete={handleTagDelete}
                        label={`${tag}`}
                        deleteIcon={
                            <HighlightOffIcon id={`tagClose${index}`} />
                        }
                    ></Chip>
                ))}
            </Container>
        </Card>
    );
};

export default Note;
