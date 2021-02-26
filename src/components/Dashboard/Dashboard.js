import React from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
import NotesList from "../NotesList/NotesList";
import CreateNoteContainer from "../CreateNote/CreateNoteContainer";

const Dashboard = ({
    notes,
    setNotes,
    noteAlert,
    setNoteAlert,
    noteBgColor,
    setNoteBgColor,
    tag,
    setTag,
    noteTag,
    setNoteTag,
}) => {
    const classes = useStyles();

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
                    tag={tag}
                    setTag={setTag}
                    noteTag={noteTag}
                    setNoteTag={setNoteTag}
                />
            </Container>
            <NotesList notes={notes} setNotes={setNotes} />
        </main>
    );
};

export default Dashboard;
