import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
//Components
import Footer from "../Footer/Footer";

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
    tag,
    setTag,
    checked,
    setChecked,
}) => {
    const classes = useStyles();
    //Delete Alert Badge
    const handleBadgeDelete = (e) => {
        //Gets badge (Chip) ID
        const closeIconID = parseInt(e.currentTarget.id.slice(10));
        //Creates copy of note's reminder object
        const noteCopy = { ...notes[closeIconID] };
        //Sets new values for note's reminder object
        noteCopy.reminder.active = false;
        noteCopy.reminder.date = "";
        noteCopy.reminder.time = "";
        //Replaces original note values with the copy's values
        notes[closeIconID] = noteCopy;
        //Sets note's reminder object new state
        if (closeIconID === id) {
            setNotes([...notes]);
        }
    };

    // Delete Tag Badge
    const handleTagDelete = (e) => {
        //Gets parent element's (<Note />) ID
        const noteID = e.currentTarget.closest(`#note${id}`).id.slice(4);
        //Isolates note's text for later use as filter param
        const tagFilter = e.currentTarget.parentElement.innerText;
        //Creates copy of note's Tag Object
        const noteCopy = { ...notes[noteID] };
        //Isolates the tag array to be filtered from the note's copy
        const noteTags = noteCopy.tags;
        //Filters the note copy's tag array
        const newNoteTags = noteTags.filter((tag) => tag !== tagFilter);
        //Sets filtered array to the original note´s tag array
        notes[noteID].tags = newNoteTags;
        //Sets note's tag object new state
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
            <Container id="noteFooter" className={classes.noteFooter}>
                <Footer
                    originNote={true}
                    tag={tag}
                    setTag={setTag}
                    checked={checked}
                    setChecked={setChecked}
                />
            </Container>
        </Card>
    );
};

export default Note;
