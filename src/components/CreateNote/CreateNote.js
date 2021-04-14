import React, { useState } from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";
//Import hooks
import useCreateNote from "../../hooks/useCreateNote";
import { createID } from "../../utils/utilities";

const CreateNote = ({ notes, setNotes }) => {
    const classes = useStyles();

    const [input, setInput] = useState({
        title: "",
        body: "",
    });

    const [noteID, setNoteID] = useState("");

    console.log(noteID);

    const { newNote } = useCreateNote({ id: noteID, content: input });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        setNoteID(createID());
    };

    const handleClick = () => {
        if (input.title !== "" || input.body !== "") {
            setNotes([...notes, newNote]);
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
        </Card>
    );
};

export default CreateNote;
