import React, { useState } from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";
import FormReminder from "../FormReminder/FormReminder";
//Import hooks
import useCreateNote from "../../hooks/useCreateNote";
import useCreateID from "../../hooks/useCreateID";

const CreateNote = ({ notes, setNotes }) => {
    const classes = useStyles();

    const [input, setInput] = useState({
        title: "",
        body: "",
    });

    const [noteID, setNoteID] = useState("");

    const { note, setNote } = useCreateNote();

    const { newID } = useCreateID(notes);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        setNoteID(newID);
        setNote({
            ...note,
            id: noteID,
            content: input,
            created: Date.now(),
        });
    };

    const handleClick = () => {
        if (input.title !== "" || input.body !== "") {
            setNotes([...notes, note]);
            setInput({ title: "", body: "" });
            setNoteID("");
        }
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
                    value={input.title}
                    onChange={handleChange}
                ></InputBase>
            </div>
            <InputBase
                name="body"
                className={classes.createNoteInput2}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
                value={input.body}
                onChange={handleChange}
            ></InputBase>
            <div id="toggleFooterDisplay" className={classes.createNoteFooter}>
                <div className={classes.innerWrap}>
                    <Footer />
                </div>

                <Button
                    onClick={handleClick}
                    className={classes.closeCreateNote}
                >
                    Add
                </Button>
            </div>
            {/* <FormReminder /> */}
        </Card>
    );
};

export default CreateNote;
