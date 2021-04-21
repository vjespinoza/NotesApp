import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    formTag: {
        display: "flex",
        flexDirection: "column",
        width: "12.5rem",
        height: "fit-content",
        padding: "0.8rem",
        position: "absolute",
        zIndex: 10,
        top: "100%",
        left: "8.5rem",
        background: "pink",
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
