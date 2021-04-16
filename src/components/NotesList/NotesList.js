import React from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";

const NotesList = ({ notes }) => {
    const classes = useStyles();

    //Sorts most recent note first
    const sortedNotes = notes.sort((a, b) => b.created - a.created);

    if (notes.length > 0) {
        return (
            <Container className={classes.notesListContainer}>
                {sortedNotes.map((note) => {
                    return (
                        <Note
                            key={note.id}
                            title={note.content.title}
                            body={note.content.body}
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
