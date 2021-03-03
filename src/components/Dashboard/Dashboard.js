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
    checked,
    setChecked,
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
                    checked={checked}
                    setChecked={setChecked}
                />
            </Container>
            <NotesList
                notes={notes}
                setNotes={setNotes}
                tag={tag}
                setTag={setTag}
                checked={checked}
                setChecked={setChecked}
            />
        </main>
    );
};

export default Dashboard;
