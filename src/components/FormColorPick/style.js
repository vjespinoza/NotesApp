import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    colorForm: {
        display: "none",
        flexDirection: "column",
        width: "15.5rem",
        height: "fit-content",
        padding: "0.8rem",
        position: "absolute",
        top: "calc(100% - 70px)",
        left: "4rem",
    },
    formTitle: {
        textAlign: "left",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    colorList: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingTop: "0.8rem",
        gap: "0.5rem",
    },
    input: {
        display: "flex",
        width: "3rem",
        height: "3rem",
        margin: 0,
        borderRadius: "50%",
        border: "1px solid #eddcd2 ",
    },
});

export default useStyles;
