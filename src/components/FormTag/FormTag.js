import React, { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useStyles from "./style";
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

const FormTags = ({
    notes,
    footerID,
    uniqueID,
    tag,
    setTag,
    checked,
    setChecked,
    setNoteTag,
    closeFormHandler,
}) => {
    const classes = useStyles();

    const [query, setQuery] = useState("");

    const domRef = useRef(null);

    useClickOutside(domRef);

    const tags = tag;

    const getNewTag = (e) => {
        setQuery(e.target.value);
    };

    const submitTag = () => {
        setTag(tag.concat(query));
        setQuery("");
        document.getElementById("inputTag").value = "";
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setNoteTag(newChecked);
    };

    return (
        <Card
            ref={domRef}
            id={uniqueID === false ? `formTag_${footerID}` : "formTag"}
            className={classes.formTag}
            // onClick={closeFormHandler}
        >
            <Typography className={classes.formTitle} variant="h3">
                Tag note:
            </Typography>
            <FormControl>
                <Input
                    id={
                        uniqueID === false ? `inputTag_${footerID}` : "inputTag"
                    }
                    className={classes.formInput}
                    type="text"
                    onChange={getNewTag}
                    placeholder="Type tag's name"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={submitTag}
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <AddOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <List>
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
            </List>
        </Card>
    );
};

export default FormTags;
