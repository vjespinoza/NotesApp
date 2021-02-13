import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        zIndex: theme.zIndex.drawer + 1,
    },
    icon: {
        fontSize: "1.5rem",
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
        fontSize: 14,
        padding: "5px 10px",
        borderRadius: 5,
    },
    navBarRight: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        marginLeft: 20,
        fontSize: "1.5rem",
    },
    avatar: {
        marginLeft: 20,
    },
}));

export default useStyles;
