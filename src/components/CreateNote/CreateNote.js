import React, { useState } from "react";
import useStyles from "./style";
import {
    Card,
    CardActionArea,
    InputBase,
    List,
    ListItem,
    ListItemIcon,
    Button,
} from "@material-ui/core";
import {
    NotificationsNone,
    NotificationsActiveOutlined,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
} from "@material-ui/icons";

const CreateNote = ({ note, setNote, noteList, setNoteList }) => {
    const classes = useStyles();

    const createNoteIcons = [
        {
            name: "alert",
            icon:
                note.reminder === true ? (
                    <NotificationsActiveOutlined />
                ) : (
                    <NotificationsNone />
                ),
        },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
    ];

    const noteReminder = (e) => {
        if (e.currentTarget.getAttribute("name") === "alert") {
            setNote({
                ...note,
                reminder: note.reminder === true ? false : true,
            });
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNote({ ...note, [name]: value });
    };

    const handleClick = () => {
        setNote({
            ...note,
            id: noteList.length + 1,
            timeStamp: Date.now(),
            reminder: true,
            color: "white",
            archived: true,
            tags: ["tagggg"],
        });
    };
    console.log(note);
    return (
        <Card className={classes.createNoteWrapper}>
            <div className={classes.noteTitle} id="toggleTitleDisplay">
                <InputBase
                    name="title"
                    className={classes.createNoteInput1}
                    placeholder="Title..."
                    variant="outlined"
                    value={note.value}
                    onChange={handleChange}
                ></InputBase>
            </div>
            <InputBase
                name="content"
                className={classes.createNoteInput2}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
                onChange={handleChange}
            ></InputBase>
            <div id="toggleFooterDisplay" className={classes.createNoteFooter}>
                <CardActionArea
                    disableRipple={true}
                    className={classes.focusHighlight}
                >
                    <List className={classes.createNoteIcons}>
                        {createNoteIcons.map((icon, index) => (
                            <ListItem
                                button={true}
                                disableRipple={true}
                                className={classes.iconItem}
                                key={index}
                                onClick={noteReminder}
                                name={icon.name}
                            >
                                <ListItemIcon className={classes.icon}>
                                    {icon.icon}
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </CardActionArea>
                <Button
                    onClick={handleClick}
                    className={classes.closeCreateNote}
                >
                    Close
                </Button>
            </div>
        </Card>
    );
};

export default CreateNote;
