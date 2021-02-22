import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    dashboardPosition: {
        position: "fixed",
        top: 0,
        right: 0,
        marginTop: 60,
        paddingBottom: 50,
        width: "calc(100vw - 240px)",
        height: "calc(100% - 80px)",
        overflow: "auto",
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
});

export default useStyles;
