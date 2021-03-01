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
    const [noteBgColor, setNoteBgColor] = useState("#ffffff");
    const [tag, setTag] = useState(
        localStorage.tag ? JSON.parse(localStorage.tag) : []
    ); //Global tags
    const [noteTag, setNoteTag] = useState([]); //Note tags

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("tag", JSON.stringify(tag));
    }, [notes, tag]);

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
                tag={tag}
                setTag={setTag}
                noteTag={noteTag}
                setNoteTag={setNoteTag}
            />
        </div>
    );
}

export default App;
