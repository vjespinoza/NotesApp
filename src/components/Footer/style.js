import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        // position: "relative",
    },
    createNoteIcons: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "& span": {
            display: "none",
        },
    },
    iconItem: {
        display: "block",
        padding: 0,
        width: 20,
    },
    icon: {
        cursor: "pointer",
        minWidth: 20,
    },
});

export default useStyles;
