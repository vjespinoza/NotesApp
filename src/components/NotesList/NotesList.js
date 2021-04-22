// import { useEffect } from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";
// import MagicGrid from "magic-grid";

const NotesList = ({ notes }) => {
    const classes = useStyles();

    //Sorts most recent note first
    const sortedNotes = notes.sort((a, b) => b.created - a.created);

    console.log(notes.length);

    // useEffect(() => {
    //     if (notes.length >= 1) {
    //         let magicGrid = new MagicGrid({
    //             container: "#container", // Required. Can be a class, id, or an HTMLElement
    //             static: false, // Required for static content. Default: false.
    //             items: 30, // Required for dynamic content. Initial number of items in the container.
    //             gutter: 30, // Optional. Space between items. Default: 25(px).
    //             maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
    //             useMin: true, // Optional. Prioritize shorter columns when positioning items. Default: false.
    //             useTransform: true, // Optional. Position items using CSS transform. Default: True.
    //             animate: true, // Optional. Animate item positioning. Default: false.
    //         });
    //         magicGrid.listen();
    //         magicGrid.positionItems();
    //     }
    // }, [notes]);

    if (notes.length > 0) {
        return (
            <Container id="container" className={classes.notesListContainer}>
                {sortedNotes.map((note) => {
                    return (
                        <Note
                            key={note.id}
                            title={note.content.title}
                            body={note.content.body}
                        />
                    );
                })}
            </Container>
        );
    } else {
        return <div></div>;
    }
};

export default NotesList;
