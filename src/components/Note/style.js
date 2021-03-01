import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    note: {
        display: "inline-block",
        width: "100%",
        minWidth: 225,
        padding: "15px 0px",
        marginBottom: "1vw",
    },
    noteTitle: {
        fontSize: 16,
    },
    noteContent: {
        fontSize: 14,
        lineHeight: "1.5",
    },
    alertBadge: {
        margin: "0.5rem 0.5rem 0 0",
    },
});

export default useStyles;
