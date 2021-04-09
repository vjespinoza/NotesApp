import React, { useState, useEffect } from "react";
import useStyles from "./appStyles";

//Imported components
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    const classes = useStyles();

    const [notes, setNotes] = useState([]);

    return (
        <div className={classes.app}>
            <NavBar />
            <Sidebar />
            <Dashboard notes={notes} setNotes={setNotes} />
        </div>
    );
}

export default App;
