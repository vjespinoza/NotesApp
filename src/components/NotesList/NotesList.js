import { useEffect } from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";
import MagicGrid from "magic-grid";

const NotesList = ({ notes }) => {
    const classes = useStyles();

    //Sorts most recent note first
    const sortedNotes = notes.sort((a, b) => b.created - a.created);

    useEffect(() => {
        if (notes.length >= 1) {
            let magicGrid = new MagicGrid({
                container: "#container",
                static: false,
                items: notes.length,
                gutter: 15,
                maxColumns: 6,
                useMin: true,
                useTransform: true,
                animate: true,
            });
            magicGrid.listen();
            magicGrid.positionItems();
        }
    }, [notes]);

    if (notes.length >= 1) {
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
