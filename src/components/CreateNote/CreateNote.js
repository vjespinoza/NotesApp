import React from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";

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
            <div id="toggleFooterDisplay" className={classes.createNoteFooter}>
                <div className={classes.innerWrap}>
                    <Footer
                        notes={notes}
                        menuIcon={false}
                        originCreateNote={true}
                        closeFormHandler={closeFormHandler}
                        toggleAlert={toggleAlert}
                        noteBgColor={noteBgColor}
                        setNoteBgColor={setNoteBgColor}
                        tag={tag}
                        setTag={setTag}
                        noteTag={noteTag}
                        setNoteTag={setNoteTag}
                        checked={checked}
                        setChecked={setChecked}
                    />
                </div>

                <Button
                    onClick={addNoteHandler}
                    className={classes.closeCreateNote}
                >
                    Add
                </Button>
            </div>
        </Card>
    );
};

export default CreateNote;
