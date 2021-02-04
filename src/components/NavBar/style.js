import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: 80,
        zIndex: theme.zIndex.drawer + 1,
    },
    icon: {
        fontSize: 30,
    },
    navBarLeft: {
        display: "flex",
        alignItems: "center",
    },
    navBarCenter: {
        display: "flex",
        alignItems: "center",
        width: "60%",
    },
    searchBar: {
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    navBarRight: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        marginLeft: 20,
    },
    avatar: {
        marginLeft: 20,
    },
}));

export default useStyles;
