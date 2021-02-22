import React from "react";
import CreateNote from "./CreateNote";
import {
    NotificationsNone,
    NotificationsActiveOutlined,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
} from "@material-ui/icons";

const CreateNoteContainer = ({ notes, setNotes, notesList, setNotesList }) => {
    // const newNote = {
    //     id: notes.length + 1,
    //     title: "",
    //     content: "",
    //     timeStamp: Date.now(),
    //     reminder: false,
    //     color: "",
    //     archived: false,
    //     tags: [],
    // };

    const createNoteIcons = [
        {
            name: "alert",
            icon:
                notes.reminder === true ? (
                    <NotificationsActiveOutlined />
                ) : (
                    <NotificationsNone />
                ),
        },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
    ];

    const addNoteHandler = () => {
        setNotes({ notes });
        // setNotesList([notes]);
        console.log(notes);
        // console.log(notesList);
    };

    const colorPalette = [
        "#ffffff",
        "#f28b82",
        "#fbbc04",
        "#fff475",
        "#ccff90",
        "#a7ffeb",
        "#cbf0f8",
        "#aecbfa",
        "#d7aefb",
        "#fdcfe8",
        "#e6c9a8",
        "#e8eaed",
    ];

    const noteReminder = (e) => {
        if (e.currentTarget.getAttribute("name") === "alert") {
            setNotes({
                ...notes,
                reminder: notes.reminder === true ? false : true,
            });
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNotes({ ...notes, [name]: value });
    };

    return (
        <CreateNote
            notes={notes}
            createNoteIcons={createNoteIcons}
            noteReminder={noteReminder}
            handleChange={handleChange}
            addNoteHandler={addNoteHandler}
        />
    );
};

export default CreateNoteContainer;
