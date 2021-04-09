import React, { useState, useEffect } from "react";
import useStyles from "./appStyles";

//Imported components
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <NavBar />
            <Sidebar />
            <Dashboard />
        </div>
    );
}

export default App;
