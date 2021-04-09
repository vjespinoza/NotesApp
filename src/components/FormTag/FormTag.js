import React, { useState, useRef } from "react";
//Import styles
import useStyles from "./style";
//Import Material UI components & icons
import {
    FormControl,
    Input,
    Card,
    Typography,
    InputAdornment,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
} from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

const FormTags = () => {
    const classes = useStyles();

    return (
        <Card className={classes.formTag}>
            <Typography className={classes.formTitle} variant="h3">
                Tag note:
            </Typography>
            <FormControl>
                <Input
                    className={classes.formInput}
                    type="text"
                    placeholder="Type tag's name"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <AddOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            {/* <List>
                {tags.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            role={undefined}
                            dense
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        "aria-labelledby": labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                        </ListItem>
                    );
                })}
            </List> */}
        </Card>
    );
};

export default FormTags;
