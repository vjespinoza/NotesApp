import React from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";

const NotesList = ({ notes, setNotes }) => {
    const classes = useStyles();

    if (notes.length > 0) {
        return (
            <Container className={classes.notesListContainer}>
                {notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            id={note.id - 1}
                            notes={notes}
                            setNotes={setNotes}
                            title={note.title}
                            content={note.content}
                            active={note.reminder.active}
                            date={note.reminder.date}
                            time={note.reminder.time}
                            color={note.color}
                            tags={note.tags}
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
