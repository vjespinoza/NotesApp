import React from "react";
import useStyles from "./style";
import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    Card,
    Typography,
} from "@material-ui/core";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

const FormColor = () => {
    const classes = useStyles();

    const colorPalette = [
        "#ffffff",
        "#f28b82",
        "#fbbc04",
        "#fff475",
        "#ccff90",
        "#a7ffeb",
        "#4cc9f0",
        "#aecbfa",
        "#d7aefb",
        "#fdcfe8",
        "#e6c9a8",
        "#d1c7c9",
    ];

    return (
        <Card id="formColor" className={classes.colorForm}>
            <Typography className={classes.formTitle} variant="h3">
                Colors:
            </Typography>
            <FormControl>
                <RadioGroup className={classes.colorList}>
                    {colorPalette.map((color, index) => {
                        return (
                            <FormControlLabel
                                id={`color${index + 1}`}
                                key={index}
                                name="colorPick"
                                value={color}
                                control={
                                    <Radio
                                        icon=""
                                        checkedIcon={
                                            <DoneOutlinedIcon
                                                style={{
                                                    fontSize: "2rem",
                                                    color: "#6c757d",
                                                }}
                                            />
                                        }
                                    />
                                }
                                className={classes.input}
                                style={{ background: color }}
                            ></FormControlLabel>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Card>
    );
};

export default FormColor;