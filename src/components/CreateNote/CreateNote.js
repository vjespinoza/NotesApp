import React from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";
import FormReminder from "../FormReminder/FormReminder";
import FormColor from "../FormColorPick/FormColor";
import FormTag from "../FormTag/FormTag";

const CreateNote = ({
    notes,
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

    const closeFormHandler = () => {
        document.getElementById("formColor").style.display = "none";
        document.getElementById("formTag").style.display = "none";
        document.getElementById("formReminder").style.display = "none";
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
                        multiline={true}
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
                    <Footer menuIcon={false} originCreateNote={true} />

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
