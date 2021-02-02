import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: 80,
        background: "white",
    },
    iconColor: {
        color: "#9c9c9c",
        fontSize: 30,
    },
    navBarLeft: {
        display: "flex",
        alignItems: "center",
    },
    navBarCenter: {
        display: "flex",
        alignItems: "center",
    },
    searchBar: {
        border: "1px solid #9c9c9c",
        outline: "none",
        borderRadius: 8,
        boxShadow: "none",
    },
    navBarRight: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        marginLeft: 20,
        color: "#9c9c9c",
        "& focus": {
            color: " red",
        },
    },
});

export default useStyles;
