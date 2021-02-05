import React from "react";
import useStyles from "./style";
import {
    Card,
    InputBase,
    List,
    ListItem,
    ListItemIcon,
    Button,
} from "@material-ui/core";
import {
    NotificationsNone,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
} from "@material-ui/icons";

const CreateNote = () => {
    const classes = useStyles();

    const createNoteIcons = [
        { icon: <NotificationsNone /> },
        { icon: <PaletteOutlined /> },
        { icon: <MoveToInboxOutlined /> },
        { icon: <LabelOutlined /> },
    ];

    return (
        <Card className={classes.createNoteWrapper}>
            <InputBase
                className={classes.createNoteInputs}
                placeholder="Title..."
                variant="outlined"
            ></InputBase>
            <InputBase
                className={classes.createNoteInputs}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
            ></InputBase>
            <div className={classes.createNoteFooter}>
                <List className={classes.createNoteIcons}>
                    {createNoteIcons.map((icon, index) => (
                        <ListItem className={classes.iconItem} key={index}>
                            <ListItemIcon className={classes.icon}>
                                {icon.icon}
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
                <Button className={classes.closeCreateNote}>Close</Button>
            </div>
        </Card>
    );
};

export default CreateNote;
