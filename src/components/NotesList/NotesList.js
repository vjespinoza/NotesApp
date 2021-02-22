import React from "react";
import Note from "../Note/Note";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";

const NotesList = ({ notes }) => {
    const classes = useStyles();

    console.log(notes);

    if (notes.length > 0) {
        return (
            <Container className={classes.notesListContainer}>
                {notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            title={note.title}
                            content={note.content}
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
