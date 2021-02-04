import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    createNoteWrapper: {
        display: "block",
        width: "40vw",
        margin: "50px auto 70px auto",
        padding: "10px ",
    },
    createNoteInputs: {
        display: "block",
        outline: "unset",
        "&:first-child": {
            marginBottom: "10px",
        },
    },
});

export default useStyles;
