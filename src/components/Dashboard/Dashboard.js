import React, { useState } from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";
import CreateNoteContainer from "../CreateNote/CreateNoteContainer";

const Dashboard = () => {
    const classes = useStyles();
    const [notes, setNotes] = useState([]);

    console.log(notes);

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNoteContainer notes={notes} setNotes={setNotes} />
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
