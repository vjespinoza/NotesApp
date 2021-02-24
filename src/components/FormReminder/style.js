import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    reminderForm: {
        display: "none",
        flexDirection: "column",
        width: "10rem",
        height: "fit-content",
        padding: "0.8rem",
        position: "absolute",
        top: "calc(100% - 70px)",
        left: "0.5rem",
    },
    formTitle: {
        textAlign: "left",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    input: {
        fontSize: "0.8rem",
        marginTop: "1rem",
    },
    confirmReminder: {
        fontSize: "0.8rem",
        marginTop: "1rem",
    },
});

export default useStyles;
