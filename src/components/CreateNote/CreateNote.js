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
import FormTag from "../FormTag/FormTag";

const CreateNote = ({
    notes,
    createNoteIcons,
    toggleAlert,
    addNoteHandler,
    noteTitle,
    noteContent,
    noteBgColor,
    setNoteBgColor,
    tag,
    setTag,
    noteTag,
    setNoteTag,
    checked,
    setChecked,
}) => {
    const classes = useStyles();

    const openFormHandler = (e) => {
        switch (e.currentTarget.getAttribute("name")) {
            case "alert":
                document.getElementById("formReminder").style.display = "flex";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
            case "color":
                document.getElementById("formColor").style.display = "flex";
                document.getElementById("formReminder").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
            case "tag":
                document.getElementById("formTag").style.display = "flex";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formReminder").style.display = "none";
                break;
            default:
                document.getElementById("formReminder").style.display = "none";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
        }
    };
    const closeFormHandler = (e) => {
        document.getElementById("formReminder").style.display = "none";
        document.getElementById("formColor").style.display = "none";
        document.getElementById("formTag").style.display = "none";
    };

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
                                    name={icon.name}
                                    onClick={openFormHandler}
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
            <FormReminder
                closeFormHandler={closeFormHandler}
                toggleAlert={toggleAlert}
            />
            <FormColor
                closeFormHandler={closeFormHandler}
                noteBgColor={noteBgColor}
                setNoteBgColor={setNoteBgColor}
            />
            <FormTag
                closeFormHandler={closeFormHandler}
                tag={tag}
                setTag={setTag}
                noteTag={noteTag}
                setNoteTag={setNoteTag}
                checked={checked}
                setChecked={setChecked}
            />
        </div>
    );
};

export default CreateNote;
