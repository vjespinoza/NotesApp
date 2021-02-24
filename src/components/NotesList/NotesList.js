import React from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";

const NotesList = ({ notes }) => {
    const classes = useStyles();

    if (notes.length > 0) {
        return (
            <Container className={classes.notesListContainer}>
                {notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            notes={notes}
                            title={note.title}
                            content={note.content}
                            reminderDate={note.reminder.date}
                            reminderTime={note.reminder.time}
                        />
                    );
                })}
            </Container>
        );
    } else {
        return <div></div>;
    }
};

export default NotesList;
