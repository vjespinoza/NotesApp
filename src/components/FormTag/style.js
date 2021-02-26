import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    formTag: {
        display: "none",
        flexDirection: "column",
        width: "12.5rem",
        height: "fit-content",
        padding: "0.8rem",
        position: "absolute",
        top: "calc(100% - 70px)",
        left: "10rem",
    },
    formTitle: {
        textAlign: "left",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    formInput: {
        marginTop: "1rem",
    },
    confirmReminder: {
        fontSize: "0.8rem",
        marginTop: "1rem",
    },
});

export default useStyles;
