import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    reminderForm: {
        display: "flex",
        flexDirection: "column",
        width: "10rem",
        height: "fit-content",
        padding: "0.8rem",
        position: "absolute",
        zIndex: 10,
        top: "100%",
        left: "1.5rem",
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
