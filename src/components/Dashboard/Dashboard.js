import React from "react";
import useStyles from "./style";

//Imported components
import NotesList from "../NotesList/NotesList";
import CreateNote from "../CreateNote/CreateNote";

const Dashboard = ({ notes, setNotes }) => {
    const classes = useStyles();

    return (
        <main id="dashboard" className={classes.dashboardPosition}>
            <div color="primary" className={classes.createNoteContainer}>
                <CreateNote notes={notes} setNotes={setNotes} />
            </div>
            <NotesList notes={notes} />
        </main>
    );
};

export default Dashboard;
