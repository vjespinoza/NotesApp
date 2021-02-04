import React from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";

//Imported components
import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";

const Dashboard = () => {
    const classes = useStyles();

    //Temp function
    const randomTextGenerator = () => {
        const textString =
            "Aenean molestie urna quis libero suscipit, quis lacinia odio tincidunt. Morbi nec consectetur est, ut consequat nulla. Duis accumsan facilisis nisl, sed efficitur turpis dapibus id. Nullam tincidunt est a lorem posuere facilisis. Duis tristique nec ante vitae malesuada. Phasellus aliquam felis a dolor ultrices, sed viverra quam elementum. Sed aliquet, odio a tempus luctus, sem tortor venenatis nibh, ut ultricies magna metus eget velit. Mauris lacinia eget justo nec molestie.           ";

        const randomIndex = Math.floor(Math.random() * textString.length);

        const randomText = textString.slice(randomIndex, textString.length);

        return randomText;
    };

    randomTextGenerator();

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNote />
            </Container>
            <Container color="primary" className={classes.notesListContainer}>
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
                <Note randomTextGenerator={randomTextGenerator} />
            </Container>
        </main>
    );
};

export default Dashboard;
