import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    dashboardPosition: {
        position: "fixed",
        top: 0,
        right: 0,
        marginTop: 80,
        width: "calc(100vw - 240px)",
        height: "100%",
        overflow: "scroll",
    },
    createNoteContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    notesListContainer: {
        display: "flex",
        flexFlow: "row wrap",
        gap: "1vw",
        width: "80%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default useStyles;
