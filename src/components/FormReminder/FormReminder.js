import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useStyles from "./style";
import {
    FormControl,
    Input,
    Card,
    Typography,
    Button,
} from "@material-ui/core";

const FormReminder = ({
    toggleAlert,
    closeFormHandler,
    footerID,
    uniqueID,
}) => {
    const classes = useStyles();

    const domRef = useRef(null);

    useClickOutside(domRef);

    const defaultDate = () => {
        const todayDate = new Date();
        const day =
            todayDate.getDate() < 10
                ? `0${todayDate.getDate()}`
                : todayDate.getDate();
        const month =
            todayDate.getMonth() < 10
                ? `0${todayDate.getMonth() + 1}`
                : todayDate.getMonth();
        const year = todayDate.getFullYear();

        return `${year}-${month}-${day}`;
    };

    const defaultTime = () => {
        const todayDate = new Date();
        const hour =
            todayDate.getHours() < 10
                ? `0${todayDate.getHours()}`
                : todayDate.getHours();
        const minutes =
            todayDate.getMinutes() < 10
                ? `0${todayDate.getMinutes()}`
                : todayDate.getMinutes();
        return `${hour}:${minutes}`;
    };

    return (
        <Card
            ref={domRef}
            id={
                uniqueID === false ? `formReminder_${footerID}` : "formReminder"
            }
            className={classes.reminderForm}
            // onClick={closeFormHandler}
        >
            <Typography className={classes.formTitle} variant="h3">
                Reminder:
            </Typography>
            <FormControl>
                <Input
                    className={classes.input}
                    type="date"
                    id={uniqueID === false ? `date_${footerID}` : "date"}
                    defaultValue={defaultDate()}
                ></Input>
            </FormControl>
            <FormControl>
                <Input
                    className={classes.input}
                    type="time"
                    id={uniqueID === false ? `time_${footerID}` : "time"}
                    defaultValue={defaultTime()}
                ></Input>
            </FormControl>
            <Button onClick={toggleAlert} className={classes.confirmReminder}>
                Confirm
            </Button>
        </Card>
    );
};

export default FormReminder;
