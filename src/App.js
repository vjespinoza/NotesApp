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
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("tag", JSON.stringify(tag));
    }, [notes, tag]);

    const test = (e) => {
        const notesList = Array.from(e.currentTarget.children[1].children);

        const footerList = notesList.map((footer) => {
            return Array.from(footer.lastChild.children);
        });
        console.log(footerList);

        const formList = footerList.map((forms) => {
            return Array.from(forms[0].children[0].children);
        });

        const forms = [];
        //Not there yet
        forms.push(
            formList[1][1].id,
            formList[1][2].id,
            formList[1][3].id,
            formList[2][1].id,
            formList[2][2].id,
            formList[2][3].id,
            formList[3][1].id,
            formList[3][2].id,
            formList[3][3].id
        );
    };

    return (
        <div className={classes.app}>
            <NavBar test={test} />
            <Sidebar test={test} />
            <Dashboard
                test={test}
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
        </div>
    );
}

export default App;
