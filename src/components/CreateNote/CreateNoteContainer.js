import React from "react";
import CreateNote from "./CreateNote";
import {
    NotificationsNone,
    NotificationsActiveOutlined,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
} from "@material-ui/icons";

const CreateNoteContainer = ({ notes, setNotes }) => {
    //CreateNote footer icons
    const createNoteIcons = [
        { name: "alert", icon: <NotificationsNone /> },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
    ];

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
    const noteColor = () => {};
    const noteArchived = () => {};
    const noteTags = () => {};

    const noteReminder = () => {
        if (document.getElementsByName("name")[0] === "alert") {
            return notes.reminder === true ? false : true;
        }
    };

    const addNoteHandler = () => {
        if (notes.length > 0) {
            setNotes([
                ...notes,
                {
                    id: noteId(),
                    title: noteTitle(),
                    content: noteContent(),
                    reminder: noteReminder(),
                },
            ]);
        }
        console.log(notes);
    };

    return (
        <CreateNote
            notes={notes}
            createNoteIcons={createNoteIcons}
            noteReminder={noteReminder}
            addNoteHandler={addNoteHandler}
            noteTitle={noteTitle}
            noteContent={noteContent}
        />
    );
};

export default CreateNoteContainer;
