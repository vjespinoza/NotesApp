import React from "react";
import CreateNote from "./CreateNote";

const CreateNoteContainer = ({
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
    const noteId = () => {
        return notes.length + 1;
    };
    const noteTitle = () => {
        return document.getElementsByName("title")[0].value;
    };
    const noteContent = () => {
        return document.getElementsByName("content")[0].value;
    };
    const noteTimestamp = () => {
        return Date.now();
    };
    const toggleAlert = () => {
        document.getElementById("formReminder").style.display = "none";
        return setNoteAlert((noteAlert) => !noteAlert);
    };
    const noteReminder = () => {
        const active = noteAlert;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (active) {
            return {
                active: active,
                date: date,
                time: time,
            };
        } else {
            return {
                active: active,
                date: "",
                time: "",
            };
        }
    };

    // const noteColor = () => {};
    // const noteArchived = () => {};
    // const noteTags = () => {};

    const addNoteHandler = () => {
        if (noteTitle() !== "" || noteContent() !== "") {
            setNotes([
                ...notes,
                {
                    id: noteId(),
                    title: noteTitle(),
                    content: noteContent(),
                    timestamp: noteTimestamp(),
                    reminder: noteReminder(),
                    color: noteBgColor,
                    tags: noteTag,
                },
            ]);
        }

        //Clear createNote inputs and reset states
        document.getElementsByName("title")[0].value = "";
        document.getElementsByName("content")[0].value = "";
        setNoteAlert(false);
        setNoteBgColor("#ffffff");
        setChecked([]);
        setNoteTag([]);
    };

    return (
        <CreateNote
            notes={notes}
            noteReminder={noteReminder}
            addNoteHandler={addNoteHandler}
            noteTitle={noteTitle}
            noteContent={noteContent}
            toggleAlert={toggleAlert}
            noteBgColor={noteBgColor}
            setNoteBgColor={setNoteBgColor}
            tag={tag}
            setTag={setTag}
            noteTag={noteTag}
            setNoteTag={setNoteTag}
            checked={checked}
            setChecked={setChecked}
        />
    );
};

export default CreateNoteContainer;
