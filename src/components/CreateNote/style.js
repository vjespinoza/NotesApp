import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    createNoteWrapper: {
        display: "block",
        width: "40vw",
        margin: "50px auto 70px auto",
        padding: "5px 12px",
    },
    createNoteInputs: {
        display: "block",
        outline: "unset",
        "&:nth-child(2)": {
            marginTop: "10px",
            height: "fit-content",
        },
    },
    createNoteFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        height: "1.9rem",
        marginTop: 10,
    },
    createNoteIcons: {
        display: "flex",
        justifyItems: "space-between",
    },
    closeCreateNote: {
        fontSize: 12,
    },
    iconItem: {
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
