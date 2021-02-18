import React, { useState } from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
// import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";

const Dashboard = () => {
    const classes = useStyles();
    const [note, setNote] = useState({
        id: 0,
        title: "",
        content: "",
        timeStamp: "",
        reminder: false,
        color: "",
        archived: false,
        tags: [],
    });
    const [noteList, setNoteList] = useState([]);

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNote
                    note={note}
                    setNote={setNote}
                    noteList={noteList}
                    setNoteList={setNoteList}
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
