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

const FormColor = ({ closeFormHandler, noteBgColor, setNoteBgColor }) => {
    const classes = useStyles();

    const colorPalette = [
        { checked: true, color: "#ffffff" },
        { checked: undefined, color: "#f28b82" },
        { checked: undefined, color: "#fbbc04" },
        { checked: undefined, color: "#fff475" },
        { checked: undefined, color: "#ccff90" },
        { checked: undefined, color: "#a7ffeb" },
        { checked: undefined, color: "#4cc9f0" },
        { checked: undefined, color: "#aecbfa" },
        { checked: undefined, color: "#d7aefb" },
        { checked: undefined, color: "#fdcfe8" },
        { checked: undefined, color: "#e6c9a8" },
        { checked: undefined, color: "#d1c7c9" },
    ];

    const handleColorChange = (e) => {
        if (e.target.value !== "#ffffff") {
            colorPalette[0].checked = undefined;
            document.getElementById("color1").removeAttribute("checked");
        }
        setNoteBgColor({ checked: e.target.checked, color: e.target.value });
    };

    return (
        <Card
            id="formColor"
            className={classes.colorForm}
            onPointerLeave={closeFormHandler}
        >
            <Typography className={classes.formTitle} variant="h3">
                Colors:
            </Typography>
            <FormControl>
                <RadioGroup className={classes.colorList} name="colorPick">
                    {colorPalette.map((colors, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={colors.color}
                                checked={colorPalette.checked}
                                onClick={handleColorChange}
                                className={classes.input}
                                style={{ background: colors.color }}
                                control={
                                    <Radio
                                        id={`color${index + 1}`}
                                        icon=""
                                        disableRipple={true}
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
                            ></FormControlLabel>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Card>
    );
};

export default FormColor;
