import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 60,
        zIndex: 0,
    },
    drawerContainer: {
        overflow: "auto",
    },
});

export default useStyles;
