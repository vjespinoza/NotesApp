import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    relPosition: {
        position: "relative",
    },
    createNoteWrapper: {
        display: "block",
        position: "relative",
        zIndex: 1,
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
    // focusHighlight: {
    //     cursor: "default",
    //     backgroundColor: "transparent",
    //     background: "transparent",
    //     color: "transparent",
    //     "&:hover": {
    //         cursor: "default",
    //         backgroundColor: "transparent",
    //         background: "transparent",
    //         color: "transparent",
    //     },
    // },
    noteTitle: {
        // display: "none",
        display: "flex",
        width: "100%",
    },
    createNoteInput1: {
        display: "block",
        width: "inherit",
        outline: "unset",
        height: "fit-content",
        fontWeight: "bold",
        wordBreak: "break-word",
    },
    createNoteInput2: {
        display: "block",
        outline: "unset",
        height: "fit-content",
        marginTop: "10px",
        wordBreak: "break-word",
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

    closeCreateNote: {
        fontSize: 12,
        marginLeft: "40%",
    },
});

export default useStyles;
