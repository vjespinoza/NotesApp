import React from "react";
import useStyles from "./style";
import { Container, Typography } from "@material-ui/core";

const Dashboard = () => {
    const classes = useStyles();

    return (
        <main className={classes.dashboardPosition}>
            <Container color="primary" className={classes.dashboardContainer}>
                <Typography variant="h2">Dashboard</Typography>
                <Typography variant="h3">Notes goes here!!!</Typography>
            </Container>
        </main>
    );
};

export default Dashboard;
