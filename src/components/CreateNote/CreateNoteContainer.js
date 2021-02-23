import React from "react";
import CreateNote from "./CreateNote";
import {
    NotificationsNone,
    NotificationsActiveOutlined,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
} from "@material-ui/icons";

const CreateNoteContainer = ({
    notes,
    setNotes,
    noteAlert,
    setNoteAlert,
    noteBgColor,
    setNoteBgColor,
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
    const toggleAlert = (e) => {
        if (e.currentTarget.getAttribute("name") === "alert") {
            setNoteAlert((noteAlert) => !noteAlert);
        }
    };
    const noteReminder = () => {
        const active = noteAlert;
        if (active) {
            return "later";
        } else {
            return "now";
        }
    };
    const noteColor = () => {};
    const noteArchived = () => {};
    const noteTags = () => {};

    const addNoteHandler = () => {
        if (noteTitle() !== "" || noteContent() !== "") {
            setNotes([
                ...notes,
                {
                    id: noteId(),
                    title: noteTitle(),
                    content: noteContent(),
                    timestamp: noteTimestamp(),
                    reminder: { active: noteAlert, time: noteReminder() },
                },
            ]);
        }
        document.getElementsByName("title")[0].value = "";
        document.getElementsByName("content")[0].value = "";
        setNoteAlert(false);
    };
    //CreateNote footer icons
    const createNoteIcons = [
        {
            name: "alert",
            icon:
                noteAlert === true ? (
                    <NotificationsActiveOutlined />
                ) : (
                    <NotificationsNone />
                ),
        },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
    ];

    return (
        <CreateNote
            notes={notes}
            createNoteIcons={createNoteIcons}
            noteReminder={noteReminder}
            addNoteHandler={addNoteHandler}
            noteTitle={noteTitle}
            noteContent={noteContent}
            toggleAlert={toggleAlert}
        />
    );
};

export default CreateNoteContainer;
