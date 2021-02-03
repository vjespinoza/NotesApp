import React from "react";
import ReactDOM from "react-dom";
//Imported styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
//Imported App component
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
