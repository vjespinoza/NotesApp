import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    createNoteWrapper: {
        display: "block",
        overflow: "visible",
        width: "30vw",
        minWidth: "20rem",
        margin: "50px auto 70px auto",
        padding: "20px 25px",
        "&:focus-within": {
            "& #toggleTitleDisplay": {
                display: "flex",
            },
            "& #toggleFooterDisplay": {
                display: "flex",
            },
        },
    },
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
        position: "relative",
    },
    innerWrap: {
        width: "50%",
        minWidth: "12rem",
    },
    closeCreateNote: {
        fontSize: 12,
        // marginLeft: "40%",
    },
});

export default useStyles;
