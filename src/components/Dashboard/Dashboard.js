import React, { useState } from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
import NotesList from "../NotesList/NotesList";
import CreateNoteContainer from "../CreateNote/CreateNoteContainer";

const Dashboard = () => {
    const classes = useStyles();

    const [notes, setNotes] = useState([]);
    const [noteAlert, setNoteAlert] = useState(false);
    const [noteBgColor, setNoteBgColor] = useState("ffffff");

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNoteContainer
                    notes={notes}
                    setNotes={setNotes}
                    noteAlert={noteAlert}
                    setNoteAlert={setNoteAlert}
                    noteBgColor={noteBgColor}
                    setNoteBgColor={setNoteBgColor}
                />
            </Container>
            <NotesList notes={notes} />
        </main>
    );
};

export default Dashboard;
