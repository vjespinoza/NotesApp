import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    dashboardPosition: {
        position: "fixed",
        top: 0,
        right: 0,
        marginTop: 80,
        width: "calc(100vw - 240px)",
        height: "100%",
    },
    dashboardContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "scroll",
    },
});

export default useStyles;
