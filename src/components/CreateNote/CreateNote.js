import React from "react";
import useStyles from "./style";
import { Card, InputBase } from "@material-ui/core";

const CreateNote = () => {
    const classes = useStyles();

    return (
        <Card className={classes.createNoteWrapper}>
            <InputBase
                className={classes.createNoteInputs}
                placeholder="Title..."
                variant="outlined"
            ></InputBase>
            <InputBase
                className={classes.createNoteInputs}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
                rows="3"
            ></InputBase>
        </Card>
    );
};

export default CreateNote;
