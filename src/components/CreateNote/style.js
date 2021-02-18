import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    createNoteWrapper: {
        display: "block",
        width: "40vw",
        margin: "50px auto 70px auto",
        padding: "5px 12px",
        "&:focus-within": {
            padding: "10px 12px",
            "& #toggleTitleDisplay": {
                display: "flex",
            },
            "& #toggleFooterDisplay": {
                display: "flex",
            },
        },
    },
    focusHighlight: {
        cursor: "default",
        backgroundColor: "transparent",
        background: "transparent",
        color: "transparent",
        "&:hover": {
            cursor: "default",
            backgroundColor: "transparent",
            background: "transparent",
            color: "transparent",
        },
    },
    noteTitle: {
        // display: "none",
        display: "flex",
    },
    createNoteInput1: {
        display: "block",
        outline: "unset",
        height: "fit-content",
        fontWeight: "bold",
    },
    createNoteInput2: {
        display: "block",
        outline: "unset",
        height: "fit-content",
        marginTop: "10px",
    },
    createNoteFooter: {
        // display: "none",
        display: "flex",
        transition: "transform 300ms ease",
        transformOrigin: "top",
        justifyContent: "space-between",
        alignContent: "center",
        height: "1.9rem",
        marginTop: 10,
        padding: 0,
    },
    createNoteIcons: {
        display: "flex",
        justifyItems: "space-between",
        alignItems: "center",
        "& span": {
            display: "none",
        },
        "& span:hover": {
            // display: "none",
            background: "yellow",
        },
    },
    closeCreateNote: {
        fontSize: 12,
    },
    iconItem: {
        display: "block",
        padding: 0,
        width: 20,
        marginRight: "2rem",
    },
    icon: {
        cursor: "pointer",
        minWidth: 20,
    },
});

export default useStyles;
