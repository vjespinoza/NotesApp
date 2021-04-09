import React from "react";
import useStyles from "./style";
//Material UI elements
import { Card, InputBase, Button } from "@material-ui/core";
//Components
import Footer from "../Footer/Footer";
import FormTag from "../FormTag/FormTag";
import FormColor from "../FormColorPick/FormColor";
import FormReminder from "../FormReminder/FormReminder";

const CreateNote = () => {
    const classes = useStyles();

    return (
        <Card className={classes.createNoteWrapper}>
            <div className={classes.noteTitle} id="toggleTitleDisplay">
                <InputBase
                    name="title"
                    className={classes.createNoteInput1}
                    placeholder="Title..."
                    variant="outlined"
                    multiline={true}
                ></InputBase>
            </div>
            <InputBase
                name="content"
                className={classes.createNoteInput2}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
            ></InputBase>
            <div id="toggleFooterDisplay" className={classes.createNoteFooter}>
                <div className={classes.innerWrap}>
                    <Footer />
                </div>

                <Button className={classes.closeCreateNote}>Add</Button>
            </div>
        </Card>
    );
};

export default CreateNote;
