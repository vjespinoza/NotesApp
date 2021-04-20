import { useState } from "react";
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
//Import hooks
import useCreateNote from "../../hooks/useCreateNote";

const FormReminder = () => {
    const classes = useStyles();

    const [input, setInput] = useState({
        time: "",
        date: "",
    });

    const [active, setActive] = useState(false);

    const { note, setNote } = useCreateNote();

    const handleChange = (e) => {
        const { type, value } = e.target;
        setInput({ ...input, [type]: value });

        if ([type] !== "") {
            setActive(true);
        }

        setNote({
            ...note,
            alert: {
                state: active,
                time: input.time,
                date: input.date,
            },
        });
    };

    const handleClick = () => {
        setInput({ time: "", date: "" });
        setActive(false);
    };

    return (
        <Card className={classes.reminderForm}>
            <Typography className={classes.formTitle} variant="h3">
                Reminder:
            </Typography>
            <FormControl>
                <Input
                    className={classes.input}
                    type="date"
                    onChange={handleChange}
                    value={input.date}
                ></Input>
            </FormControl>
            <FormControl>
                <Input
                    className={classes.input}
                    type="time"
                    onChange={handleChange}
                    value={input.time}
                ></Input>
            </FormControl>
            <Button onClick={handleClick} className={classes.confirmReminder}>
                Confirm
            </Button>
        </Card>
    );
};

export default FormReminder;
