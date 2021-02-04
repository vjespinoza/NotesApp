import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    note: {
        display: "block",
        width: 225,
        padding: "15px 0px",
    },
    noteTitle: {
        fontSize: 16,
    },
    noteContent: {
        fontSize: 14,
        lineHeight: "1.5",
    },
});

export default useStyles;
