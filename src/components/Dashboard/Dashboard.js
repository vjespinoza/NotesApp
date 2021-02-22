import React, { useState } from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";
import CreateNoteContainer from "../CreateNote/CreateNoteContainer";

const Dashboard = () => {
    const classes = useStyles();
    const [notes, setNotes] = useState([{}]);
    const [notesList, setNotesList] = useState([]);

    // console.log(notes);
    // console.log(notesList);

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNoteContainer
                    notes={notes}
                    setNotes={setNotes}
                    notesList={notesList}
                    setNotesList={setNotesList}
                />
            </Container>
            <Container
                color="primary"
                id="noteList"
                className={classes.notesListContainer}
            ></Container>
        </main>
    );
};

export default Dashboard;
