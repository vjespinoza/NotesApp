import React, { useState } from "react";
import useStyles from "./appStyles";

//Imported components
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

//Import custom hook
import { NoteDataProvider } from "./hooks/useCreateNote";

function App() {
    const classes = useStyles();

    const [notes, setNotes] = useState([]);

    return (
        <NoteDataProvider className={classes.app}>
            <NavBar />
            <Sidebar />
            <Dashboard notes={notes} setNotes={setNotes} />
        </NoteDataProvider>
    );
}

export default App;
