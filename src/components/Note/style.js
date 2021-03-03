import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    note: {
        display: "inline-block",
        width: "100%",
        minHeight: "5rem",
        minWidth: 225,
        padding: "15px 0px 40px 0",
        marginBottom: "1vw",
        position: "relative",
        // "&:hover": {
        //     "& #noteFooter": {
        //         bottom: -5,
        //         transform: "scale(1)",
        //         transformOrigin: "left",
        //         transition: "200ms ease-in-out",
        //     },
        // },
        overflow: "visible",
    },
    noteTitle: {
        fontSize: 16,
        wordBreak: "break-word",
    },
    noteContent: {
        fontSize: 14,
        lineHeight: "1.5",
        wordBreak: "break-word",
    },
    alertBadge: {
        margin: "0.5rem 0.5rem 0 0",
    },
    footerWrapper: {
        overflow: "visible",
    },
    noteFooter: {
        position: "absolute",
        bottom: -5,
        left: 0,
        // transform: "scale(0)",
        // transformOrigin: "left",
        // transition: "200ms ease-in-out",
    },
});

export default useStyles;
