import React, { useState } from "react";
import useStyles from "./style";
import {
    FormControl,
    Input,
    Card,
    Typography,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

const FormTags = ({ tag, setTag }) => {
    const classes = useStyles();

    const [query, setQuery] = useState("");

    const getNewTag = (e) => {
        setQuery(e.target.value);
    };

    const submitTag = () => {
        setTag(tag.concat(query));
        setQuery("");
        document.getElementById("inputTag").value = "";
    };

    return (
        <Card id="formTag" className={classes.formTag}>
            <Typography className={classes.formTitle} variant="h3">
                Tag note:
            </Typography>
            <FormControl>
                <Input
                    id="inputTag"
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
        </Card>
    );
};

export default FormTags;
