import useStyles from "./appStyles";

//Imported components
import NavBar from "./components/NavBar/NavBar";

function App() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <NavBar />
        </div>
    );
}

export default App;
