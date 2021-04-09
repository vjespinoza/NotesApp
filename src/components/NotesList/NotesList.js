import React from "react";
import Note from "../Note/Note";
import { Container } from "@material-ui/core";
import useStyles from "./style";

const NotesList = () => {
    const classes = useStyles();

    return <Note />;

    // if (notes.length > 0) {
    //     return (
    //         <Container className={classes.notesListContainer}>
    //             {notes.map((note, index) => {
    //                 return (
    //                     <Note />
    //                 );
    //             })}
    //         </Container>
    //     );
    // } else {
    //     return <div></div>;
    // }
};

export default NotesList;
