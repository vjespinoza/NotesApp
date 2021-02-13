import React from "react";
import useStyles from "./style";
import { Container } from "@material-ui/core";
import {
    fourColumnLayout,
    threeColumnLayout,
    twoColumnLayout,
} from "../../utilities/dashboardLayout";

//Imported components
import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";

const Dashboard = () => {
    const classes = useStyles();

    //Temp functions
    const randomTextGenerator = () => {
        const textString =
            "Aenean molestie urna quis libero suscipit, quis lacinia odio tincidunt. Morbi nec consectetur est, ut consequat nulla. Duis accumsan facilisis nisl, sed efficitur turpis dapibus id. Nullam tincidunt est a lorem posuere facilisis. Duis tristique nec ante vitae malesuada. Phasellus aliquam felis a dolor ultrices, sed viverra quam elementum. Sed aliquet, odio a tempus luctus, sem tortor venenatis nibh, ut ultricies magna metus eget velit. Mauris lacinia eget justo nec molestie.           ";

        const randomIndex = Math.floor(Math.random() * textString.length);

        const randomText = textString.slice(randomIndex, textString.length);

        return randomText;
    };

    const notesQty = 40;
    const notesArr = [];

    for (let i = 0; i < notesQty; i++) {
        notesArr.push(
            <Note
                key={i}
                count={i + 1}
                randomTextGenerator={randomTextGenerator}
            />
        );
    }

    randomTextGenerator();
    //Temp functions - END

    console.log(fourColumnLayout());
    console.log(threeColumnLayout());
    console.log(twoColumnLayout());
    // const noteList = document.getElementsByClassName("makeStyles-note-23");
    // console.log(noteList);

    // window.addEventListener("resize", () => {
    //     const noteList = document.getElementById("noteList");
    //     console.log(noteList.clientWidth);
    //     if (noteList.clientWidth >= 1024) {
    //         console.log(twoColumnLayout());
    //     } else if (
    //         noteList.clientWidth >= 728 &&
    //         noteList.clientWidth <= 1023
    //     ) {
    //         console.log(fourColumnLayout());
    //     }
    // });

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.createNoteContainer}>
                <CreateNote />
            </Container>
            <Container
                color="primary"
                id="noteList"
                className={classes.notesListContainer}
            >
                {notesArr}
            </Container>
        </main>
    );
};

export default Dashboard;
