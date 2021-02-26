import React, { useState, useEffect } from "react";
import useStyles from "./appStyles";

//Imported components
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    const classes = useStyles();

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [noteAlert, setNoteAlert] = useState(false);

    const [noteBgColor, setNoteBgColor] = useState({
        checked: true,
        color: "#ffffff",
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <div className={classes.app}>
            <NavBar />
            <Sidebar />
            <Dashboard
                notes={notes}
                setNotes={setNotes}
                noteAlert={noteAlert}
                setNoteAlert={setNoteAlert}
                noteBgColor={noteBgColor}
                setNoteBgColor={setNoteBgColor}
            />
        </div>
    );
}

export default App;
