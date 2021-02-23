import React from "react";
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
import FormReminder from "../FormReminder/FormReminder";
import FormColor from "../FormColorPick/FormColor";

const CreateNote = ({
    notes,
    createNoteIcons,
    toggleAlert,
    addNoteHandler,
    noteTitle,
    noteContent,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.relPosition}>
            <Card className={classes.createNoteWrapper}>
                <div className={classes.noteTitle} id="toggleTitleDisplay">
                    <InputBase
                        name="title"
                        className={classes.createNoteInput1}
                        placeholder="Title..."
                        variant="outlined"
                        value={notes.value}
                        onChange={noteTitle}
                    ></InputBase>
                </div>
                <InputBase
                    name="content"
                    className={classes.createNoteInput2}
                    placeholder="Add a new note..."
                    variant="outlined"
                    multiline={true}
                    value={notes.value}
                    onChange={noteContent}
                ></InputBase>
                <div
                    id="toggleFooterDisplay"
                    className={classes.createNoteFooter}
                >
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
                                    onClick={toggleAlert}
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
                        onClick={addNoteHandler}
                        className={classes.closeCreateNote}
                    >
                        Add
                    </Button>
                </div>
            </Card>
            <FormColor />
            <FormReminder />
        </div>
    );
};

export default CreateNote;
