import React from "react";
import useStyles from "./style";
import {
    Card,
    CardActionArea,
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
            <div className={classes.noteTitle} id="toggleTitleDisplay">
                <InputBase
                    className={classes.createNoteInput1}
                    placeholder="Title..."
                    variant="outlined"
                ></InputBase>
            </div>
            <InputBase
                className={classes.createNoteInput2}
                placeholder="Add a new note..."
                variant="outlined"
                multiline={true}
            ></InputBase>
            <div id="toggleFooterDisplay" className={classes.createNoteFooter}>
                <CardActionArea
                    disableRipple={true}
                    className={classes.focusHighlight}
                >
                    <List className={classes.createNoteIcons}>
                        {createNoteIcons.map((icon, index) => (
                            <ListItem
                                button={true}
                                className={classes.iconItem}
                                key={index}
                            >
                                <ListItemIcon className={classes.icon}>
                                    {icon.icon}
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </CardActionArea>
                <Button className={classes.closeCreateNote}>Close</Button>
            </div>
        </Card>
    );
};

export default CreateNote;
