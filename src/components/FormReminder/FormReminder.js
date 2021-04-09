import React, { useState, useRef } from "react";
//iImport styles
import useStyles from "./style";
//Import Material UI components & icons
import {
    FormControl,
    Input,
    Card,
    Typography,
    Button,
} from "@material-ui/core";

const FormReminder = () => {
    const classes = useStyles();

    return (
        <Card className={classes.reminderForm}>
            <Typography className={classes.formTitle} variant="h3">
                Reminder:
            </Typography>
            <FormControl>
                <Input className={classes.input} type="date"></Input>
            </FormControl>
            <FormControl>
                <Input className={classes.input} type="time"></Input>
            </FormControl>
            <Button className={classes.confirmReminder}>Confirm</Button>
        </Card>
    );
};

export default FormReminder;
