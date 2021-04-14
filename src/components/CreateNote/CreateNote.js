import React, { useState } from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";
//Import hooks
import useCreateNote from "../../hooks/useCreateNote";

const CreateNote = ({ notes, setNotes }) => {
    const classes = useStyles();

    const [input, setInput] = useState({
        title: "",
        body: "",
    });

    const { note } = useCreateNote("content", input);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput({ ...input, [name]: value });
    };

    const handleClick = () => {
        setNotes([...notes, note]);
        setInput({ title: "", body: "" });
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
