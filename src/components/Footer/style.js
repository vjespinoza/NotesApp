import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
    },
    createNoteIcons: {
        display: "flex",
        justifyItems: "space-between",
        alignItems: "center",
        "& span": {
            display: "none",
        },
    },
    iconItem: {
        display: "block",
        padding: 0,
        width: 20,
        marginRight: "2rem",
    },
    icon: {
        cursor: "pointer",
        minWidth: 20,
    },
});

export default useStyles;
