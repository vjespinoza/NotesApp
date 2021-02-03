import { createMuiTheme } from "@material-ui/core/styles";
// import { Grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#9556cb",
            main: "#7b2cbf",
            dark: "#561e85",
            contrastText: "#fff",
        },
        secondary: {
            light: "#eceeee",
            main: "#e8eaea",
            dark: "#a2a3a3",
            contrastText: "#333333",
        },
    },
});

export default theme;
